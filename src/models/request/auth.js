const Joi = require('@hapi/joi')

module.exports = {
    // creatNewUser
    0: {
        body: {
            firstname: Joi.string().required().default('Jchong'),
            lastname: Joi.string().required().default('Eang'),
            email: Joi.string().required().default('chongeangyou@gmail.com'),
            password: Joi.string().required().default('12345678'),
            confirmPassword: Joi.string().required().default('12345678'),
        },
        model: "signUp", // Name of the model
        group: "Authentication", // Swagger tag for apis.
        description: "Sign up user"
    },
    1: {
        body: {
            email: Joi.string().required().default('chongeangyou@gmail.com'),
            password: Joi.string().required().default('12345'),
        },
        model: "login", // Name of the model
        group: "Authentication", // Swagger tag for apis.
        description: "Login up user"
    },
    2: {
        group: "Authentication"
    },
    3: {
        group: "Authentication"
    },
    4: {
        group: "Authentication"
    },
    5: {
        group: "Authentication"
    }
}