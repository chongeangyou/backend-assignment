const Joi = require('@hapi/joi')

module.exports = {
    0: {
        body: {
            title: Joi.string().required().default('Freenlance'),
            type: Joi.string().required().default('Private'),
            organization: Joi.string().required().default('self service'),
            description: Joi.string().required().default('Working experience'),
            fromDate: Joi.number(),
            toDate: Joi.number()
        },
        model: "createExperience", // Name of the model
        group: "Experience", // Swagger tag for apis.
        description: "Create the working experience and save details in database"
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
        model: "getAllExperience",
        group: 'Experience',
        description: 'Get all experiences'
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "Experience", // Swagger tag for apis.
        description: "Get Experience by Id"
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            title: Joi.string().required().optional(),
            type: Joi.string().required().optional(),
            organization: Joi.string().required().optional(),
            description: Joi.string().required().optional(),
            fromDate: Joi.number(),
            toDate: Joi.number()
        },
        model: "updateExperience", // Name of the model
        group: "Experience", // Swagger tag for apis.
        description: "Update Experience and save details in database"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "Experience", // Swagger tag for apis.
        description: "Delete Experience by Id"
    },
    
}