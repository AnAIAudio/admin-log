module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false,
        ecmaVersion: 2022,
    },
    parser: 'vue-eslint-parser',
    plugins: ['@typescript-eslint'],
};
