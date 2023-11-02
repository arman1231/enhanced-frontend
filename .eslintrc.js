module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/src/**/*.test.{ts,tsx}"
            ],
            "rules": {
                "i18next/no-literal-string": "off"
            },
            "parserOptions": {
                "sourceType": "script",
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ["error", {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/consistent-type-assertions": "off"
    },
    "globals": {
        __ID_DEV__: true
    }
}
