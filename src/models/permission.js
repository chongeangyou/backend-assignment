const actions = {
    DELETE_EXPERIENCE: "DELETE_EXPERIENCE",
    DELETE_INTRODUCTION: "DELETE_INTRODUCTION",
    DELETE_SERVICE: "DELETE_SERVICE",
    DELETE_SKILL: "DELETE_SKILL",
    DELETE_BLOG: "DELETE_BLOG",
    DELETE_USER: "DELETE_USER",
    EDIT_EXPERIENCE: "EDIT_EXPERIENCE",
    EDIT_INTRODUCTION: "EDIT_INTRODUCTION",
    EDIT_SERVICE: "EDIT_SERVICE",
    EDIT_SKILL: "EDIT_SKILL",
    EDIT_BLOG: "EDIT_BLOG",
    EDIT_USER: "EDIT_USER",
    CREATE_EXPERIENCE: "CREATE_EXPERIENCE",
    CREATE_INTRODUCTION: "CREATE_INTRODUCTION",
    CREATE_SERVICE: "CREATE_SERVICE",
    CREATE_SKILL: "CREATE_SKILL",
    CREATE_BLOG: "CREATE_BLOG",
    CREATE_USER: "CREATE_USER",
    READ_EXPERIENCE: "READ_EXPERIENCE",
    READ_INTRODUCTION: "READ_INTRODUCTION",
    READ_SERVICE: "READ_SERVICE",
    READ_SKILL: "READ_SKILL",
    READ_BLOG: "READ_BLOG",
    READ_USER: "READ_USER",
};

const roles = {
    ADMIN: {
        role: "ADMIN",
        permissions: Object.keys(actions)
    },
    USER: {
        role: "USER",
        permissions: [
            actions.READ_EXPERIENCE,
            actions.READ_USER,
            actions.READ_BLOG,
            actions.READ_INTRODUCTION,
            actions.READ_SERVICE,
            actions.READ_SKILL,

            actions.CREATE_SERVICE,
            actions.CREATE_EXPERIENCE,
            actions.CREATE_BLOG,
            actions.CREATE_INTRODUCTION,
            actions.CREATE_SKILL,
            actions.EDIT_BLOG,
            actions.EDIT_EXPERIENCE,
            actions.EDIT_INTRODUCTION,
            actions.EDIT_SERVICE,
            actions.EDIT_SKILL,
            actions.DELETE_BLOG,
            actions.DELETE_EXPERIENCE,
            actions.DELETE_INTRODUCTION,
            actions.DELETE_SERVICE,
            actions.DELETE_SKILL
        ]
    },
    GUEST: {
        role: "GUEST",
        permissions: [
            actions.READ_EXPERIENCE,
            actions.READ_BLOG,
            actions.READ_INTRODUCTION,
            actions.READ_SERVICE,
            actions.READ_SKILL,
        ]
    }
}

module.exports = { actions, roles }