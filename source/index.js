module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": true,
        "tsconfigRootDir": "__dirname"
    },
    "root": true,
    "rules": {
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/space-before-function-paren": ["error", "never"],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/naming-convention": [
            "error",
            { "selector": "class", "format": ["PascalCase"] },
            { "selector": "classMethod", "format": ["camelCase"] },
            { "selector": "classProperty", "format": ["camelCase", "UPPER_CASE"] },
            
            { "selector": "enum", "format": ["PascalCase"] },
            { "selector": "enumMember", "format": ["UPPER_CASE"] },

            { "selector": "interface", "format": ["PascalCase"] },
            { "selector": "typeAlias", "format": ["PascalCase"] },


            { "selector": "parameter", "format": ["snake_case"] },
            { "selector": "variable", "format": ["snake_case"] },
        ],
        "@typescript-eslint/indent": ["error", "tab"],
    }
};