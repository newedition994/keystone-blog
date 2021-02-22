const {Text, Password, Checkbox } = require('@keystonejs/fields')

const userFields = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        email: {
            type: Text,
            isRequire: true,
            isUnique: true,
        },
        password: {
            type: Password,
            isRequired: true,
        },
        isAdmin: {
            type: Checkbox,
            isRequired: true,
        },
    }
}

module.exports = userFields;