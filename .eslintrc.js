module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: 0,
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
                singleQuote: true,
                tabWidth: 4,
            },
        ],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'vue/multi-word-component-names': 'off',
        'prefer-rest-params': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
