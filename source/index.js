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
        "@typescript-eslint/brace-style": ["error", "allman", { "allowSingleLine": true }]
    }
};