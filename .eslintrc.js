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
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/ban-ts-comment": "off"
    },
    "globals": {
        __ID_DEV__: true
    },
    "ignorePatterns": [
        "buildDevServer.ts",
        "webpack.config.ts",
        "setupTests.ts",
        "jestEmptyComponent.tsx",
        "jest.config.ts",
        "config.ts",
        "buildSvgLoader.ts",
        "buildCssLoader.ts",
        "buildWebpackConfig.ts",
        "buildResolvers.ts",
        "buildPlugins.ts",
        "buildLoaders.ts"
    ]
}
