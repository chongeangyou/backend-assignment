const jwt = require('jsonwebtoken')

const signJWT = (id, email, username) => {
    const token = jwt.sign(
        { id: id, email: email, username: username },
        process.env.JWT_SECRET, { expiresIn: '1d' }
    )
    return token
}

 module.exports = signJWT