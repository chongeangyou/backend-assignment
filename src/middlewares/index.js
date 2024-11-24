const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { responseHandler } = require('express-intercept');
const redisClient = require('../redis');

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




module.exports = { handleError, logger, verifyJWT, handleValidation, cacheInterceptor, cacheMiddleware }