require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

//const asyncHandler = require('express-async-handler');
const courseRouter = require('./src/routes/course.js')
const bookRouter = require('./src/routes/book.js')
const userRouter = require('./src/routes/user.js')
const authRouter = require('./src/routes/auth.js')
const experienceRouter = require('./src/routes/experience.js')
const skillRouter = require('./src/routes/skill.js')
const serviceRouter = require('./src/routes/service.js')
const blogRouter = require('./src/routes/blog.js')

const jwtStrategy = require('./src/common/strategy/jwt.js')

const {handleError, logger, verifyJWT} = require('./src/middlewares/index.js')
const dbConnect = require('./src/db/db.js')



dbConnect().catch((err) => {
    console.log("Error DB")
})

const app = express()

passport.use(jwtStrategy)

app.use(bodyParser.json())
app.use(logger)

app.use('/books', passport.authenticate('jwt', { session: false }), bookRouter)
app.use('/courses',passport.authenticate('jwt', { session: false }), courseRouter)
app.use('/experiences', verifyJWT, experienceRouter)
app.use('/users',verifyJWT, userRouter)
app.use('/skills', verifyJWT, skillRouter)
app.use('/services', verifyJWT, serviceRouter)
app.use('/blogs', verifyJWT, blogRouter)
app.use('/auth', authRouter)



app.use(handleError)
app.listen(process.env.PORT, function(){
    console.log(`Server is running on port ${process.env.PORT}`)
})