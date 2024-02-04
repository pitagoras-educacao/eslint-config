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
            {
                "selector": ["method"],
                "format": ["camelCase"]
            },
            {
                "selector": ["class", "enum", "interface", "typeAlias"],
                "format": ["PascalCase"]
            },
            {
                "selector": ["classPropery", "enumMember"],
                "format": ["UPPER_CASE"]
            },
            {
                "selector": ["varibleLike"],
                "format": ["snake_case"]
            }
        ]
    }
};