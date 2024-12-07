const jwt = require('jsonwebtoken')

const signJWT = (id, email, username) => {
    const accessToken = jwt.sign(
        { id: id, email: email, username: username },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRE }
    )

    const refreshToken = jwt.sign(
        { id: id, email: email, username: username },
        process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRE }
    )
    return { accessToken, refreshToken }
}

 module.exports = signJWT