const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

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

function authroize(req, res, next) {
    return res.status(404).json({
        msg: "Not Found"
    })
}

function getError(){
    throw new Error("Error DB")
}

function logger(req, res, next){
    console.log('incoming requesti')
    next()
}

function authroize(req, res, next) {
    return res.status(404).json({
        msg: "Not Found"
    })
}

function checkData(req, res, next){
    const id = req.params.id;
    const course = courses.find((item) => {
        return item.id == id
    })
    if(!course){
        return res.status(404).json({
            error: 'Resource Not found'
        })
    }
    next()
}

function handleValidation(req, res, next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    next()
}



module.exports = { handleError, logger, verifyJWT, handleValidation }