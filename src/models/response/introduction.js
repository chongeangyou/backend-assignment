module.exports = {
    createIntroduction: {
        201: {
            message: {
                type: 'Successfully created introduction'
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    getAllIntroduction: {
        200: {
            docs: {
                type: 'array',
                items: {
                    type: 'object'
                }
            },
            totalDocs: {
                type: 'number'
            },
            limit: {
                type: 'number'
            },
            totalPages: {
                type: 'number'
            },
            page: {
                type: 'number'
            },
            pagingCounter: {
                type: 'number'
            },
            hasPrevPage: {
                type: 'boolean'
            },
            hasNextPage: {
                type: 'boolean'
            },
            prevPage: {
                type: 'string'
            },
            nextPage: {
                type: 'string'
            }
        }
    }
};