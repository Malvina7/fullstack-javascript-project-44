module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'eqeqeq': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-magic-numbers': [
      'warn',
      { ignoreArrayIndexes: true, enforceConst: true }
    ],
  },
};
