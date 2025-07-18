module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      // отключим то, что не критично
      'no-unused-vars': 'warn',
      'no-useless-constructor': 'warn',
      'eqeqeq': 'warn',
      'no-redeclare': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'react/no-direct-mutation-state': 'warn'
    }
  };