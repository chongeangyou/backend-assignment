const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { responseHandler } = require('express-intercept');
const redisClient = require('../redis');
const { rateLimit } = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');
const { roles } = require('../models/permission');
const UserModel = require('../models/user');


const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    const extract = token.split(' ')[1]
    const decoded = jwt.verify(extract, process.env.JWT_SECRET);
    req.user = decoded;
    next();
})


function handleError(error, req, res, next){
    return res.json(error.message)

}

function logger(req, res, next){
    console.log('incoming requesti')
    next()
}


function handleValidation(req, res, next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    next()
}

const cacheInterceptor = (ttl) => responseHandler().for(req => {
    return req.method == "GET"
}).if(res => {
    const codes = [200, 201, 202, 203, 204]
    return codes.includes(res.statusCode)
}).getString(async (body, req, res) => {
    const { originalUrl } = req
    console.log("Get data from cache")
    redisClient.set(originalUrl, body, {
        EX: ttl
    })
})

const invalidateInterceptor = responseHandler().for(req => {
    const methods = ["POST", "PUT", "PATCH", "DELETE"]
    return methods.includes(req.method)
}).if(res => {
    const codes = [200, 201, 202, 203, 204]
    return codes.includes(res.statusCode)
}).getString(async (body, req, res) => {
    const { baseUrl } = req
    console.log(baseUrl)
    const keys = await redisClient.keys(`${baseUrl}*`)
    console.log(keys)
    redisClient.del(keys[0])
})

const cacheMiddleware = asyncHandler(async (req, res, next) => {
    const { originalUrl } = req
    if (req.method == "GET") {
        const data = await redisClient.get(originalUrl)
        if (data !== null) {
            return res.json(JSON.parse(data))
        }
    }
    next()
})

const limiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.sendCommand(args)
      }),
    windowMs: 1 * 60 * 1000, 
    max: 30, 
    message: { msg: 'Too many requestion for this IP, you are bot or human ?'}
})

const limitLogin = rateLimit({
    windowMs: 5 * 60 * 100,
    max: 5,
    message: { msg: ' Too many login attempt, pls verify your password or email'}
})


const checkRole = (action, role) => {
    console.log(role)
    console.log(roles[role])
    return roles[role].permissions.includes(action)
}
const permission = (action) => asyncHandler((req, res, next) => {
    const user = req.user
    console.log(user)
    if (!checkRole(action, user.permission)) {
        return res.json({ msg: "Unauthorized" })
    }
    next()
})


const verifyRefresh = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    const extract = token.split(' ')[1]
    const decoded = jwt.verify(extract, process.env.JWT_REFRESH_SECRET);
    const user = await UserModel.findById(decoded.id)
    console.log(user)
    req.user = { ...user._doc, extract }
    // console.log(req.user)
    next();
})

module.exports = { 
    handleError, 
    logger, 
    verifyJWT, 
    handleValidation, 
    cacheInterceptor, 
    cacheMiddleware, 
    invalidateInterceptor,
    limitLogin,
    permission,
    verifyRefresh
 }