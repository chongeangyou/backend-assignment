const Joi = require('@hapi/joi')
const { description } = require('@hapi/joi/lib/base')

module.exports = {
    0: {
        body: {
            name: Joi.string().required().default('Freenlance'),
            description: Joi.string().required().default('I have a freenlance service'),
            detail: Joi.string().required().default('this is detail'),
        },
        model: "createService", // Name of the model
        group: "Service", // Swagger tag for apis.
        description: "Create the Service and save details in database"
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
        model: "getAllService",
        group: 'Service',
        description: 'Get all Service'
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "Service", // Swagger tag for apis.
        description: "Get Service by Id"
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().required().optional(),
            description: Joi.string().required().optional(),
            detail: Joi.string().required().optional(),
        },
        model: "updateService", // Name of the model
        group: "Service", // Swagger tag for apis.
        description: "Update Service and save details in database"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "Service", // Swagger tag for apis.
        description: "Delete Service by Id"
    },
    
}