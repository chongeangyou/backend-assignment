const Joi = require('@hapi/joi')

module.exports = {
    0: {
        body: {
            name: Joi.string().required().default('HTML'),
            percent: Joi.number().required().default(80),
            type: Joi.string().required().default('Private'),
        },
        model: "createSkill", // Name of the model
        group: "Skill", // Swagger tag for apis.
        description: "Create the Skill and save details in database"
    },
    1: {
        query: {
            limit: Joi.number().optional().default(10).description("Number of items to take"),
            page: Joi.number().optional().default(1),
            sort: Joi.string().optional(),
            query: Joi.string().optional(),
            populate: Joi.string().optional(),
            select: Joi.string().optional()
        },
        model: "getAllSkill",
        group: 'Skill',
        description: 'Get all skills'
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "Skill", // Swagger tag for apis.
        description: "Get Skill by Id"
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().required().optional(),
            percent: Joi.number().required().optional(),
            type: Joi.string().required().optional(),
        },
        model: "updateSkill", // Name of the model
        group: "Skill", // Swagger tag for apis.
        description: "Update Skill and save details in database"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "Skill", // Swagger tag for apis.
        description: "Delete Skill by Id"
    },
    
}