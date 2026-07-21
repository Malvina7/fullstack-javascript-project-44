// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    rules: {
      'no-magic-numbers': 'warn',
    },
  },
  {
    files: ['src/utils.js', 'src/game-engine.js'],
    rules: {
      'no-magic-numbers': 'off',
    },
  },
];

