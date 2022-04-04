module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true,
        'vue/setup-compiler-macros': true,
        worker: true,
        serviceworker: true,
    },
    plugins: ['vue'],
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parserOptions: {
            parser: '@typescript-eslint/parser',
            sourceType: 'module',
            vueFeatures: {
                filter: true,
                interpolationAsNonHTML: false,
            },
        },
    },
    rules: {
        'vue/script-setup-uses-vars': 'error',
        'no-console': 'off',
        'node-debugger': 'off',
        semi: ['error', 'always'],
        "comma-dangle": ['warn', {
            objects: 'always',
        }],
        camelcase: 'off',
        '@typescript-eslint/camelcase': 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "object-shorthand": "error",
    },
};
