require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

//const asyncHandler = require('express-async-handler');
const userRouter = require('./src/routes/user.js')
const authRouter = require('./src/routes/auth.js')
const experienceRouter = require('./src/routes/experience.js')
const skillRouter = require('./src/routes/skill.js')
const serviceRouter = require('./src/routes/service.js')
const blogRouter = require('./src/routes/blog.js')
const introductionRouter = require('./src/routes/introduction.js')
const setupSwagger = require('./src/swagger/index.js')

const jwtStrategy = require('./src/common/strategy/jwt.js')
const redisClient = require('./src/redis/index.js');
const {handleError, logger, verifyJWT, handleValidation, cacheInterceptor, cacheMiddleware, invalidateInterceptor, limitLogin} = require('./src/middlewares/index.js')
const dbConnect = require('./src/db/db.js')
const { rateLimit } = require('express-rate-limit')
const { RedisStore } = require('rate-limit-redis')


dbConnect().catch((err) => {
    console.log("Error DB")
})

// redisClient.set('test', "1234", {
//     EX:20
// })

const limiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.sendCommand(args),
    }),
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 30, // Limit each IP to 30 requests per windowMs 30 times
    message: { msg: 'Too many requests from this IP, Are you bot? try to attack my system?' },
})

const app = express()

passport.use(jwtStrategy)

app.use(bodyParser.json())
app.use(logger)

//app.use(limitLogin)
app.use('/v1/auth', authRouter)

app.use(limiter)
// app.use(cacheMiddleware)
// app.use(cacheInterceptor(60*5))
// app.use(invalidateInterceptor)

app.use('/v1/experiences', 
    passport.authenticate('jwt', { session: false }),
    cacheMiddleware,
    cacheInterceptor(60*5), 
    invalidateInterceptor,
     experienceRouter)
app.use('/v1/users',
    passport.authenticate('jwt', { session: false }),
    cacheMiddleware,
    cacheInterceptor(60*5),
    invalidateInterceptor, 
    userRouter)
app.use('/v1/skills', 
    passport.authenticate('jwt', { session: false }),
    cacheMiddleware,
    cacheInterceptor(60*5),
    invalidateInterceptor, 
    skillRouter)
app.use('/v1/services', 
    passport.authenticate('jwt', { session: false }),
    cacheMiddleware,
    cacheInterceptor(60*5), 
    invalidateInterceptor,
    serviceRouter)
app.use('/v1/blogs', 
    passport.authenticate('jwt', { session: false }),
    cacheMiddleware,
    cacheInterceptor(60*5), 
    invalidateInterceptor, 
    blogRouter)
app.use('/v1/introductions', 
    passport.authenticate('jwt', { session: false}),
    cacheMiddleware,
    cacheInterceptor(60*5),  
    invalidateInterceptor,
    handleValidation, 
    introductionRouter)


app.use(handleError)
setupSwagger(app)
app.listen(process.env.PORT, function(){
    console.log(`Server is running on port ${process.env.PORT}`)
})