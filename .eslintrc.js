module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      // отключаем самые «шумные» правила
      'no-useless-constructor': 'off',
      'react/no-direct-mutation-state': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-unused-vars': 'off',
      eqeqeq: 'off',
      'no-redeclare': 'off',
    },
    overrides: [
      {
        // для всего, что сгенерировано Swagger-Codegen
        files: ['src/server-api/**/*.js'],
        env: { node: true },
        rules: {
          // полностью выключить ESLint
          'no-console': 'off',
          'no-undef': 'off',
          'no-unused-vars': 'off',
          'eqeqeq': 'off',
        },
      },
    ],
  };