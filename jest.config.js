module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(css|less|scss)$': 'jest-transform-css',
    },
    moduleNameMapper: {
      // если используете алиасы или другие моки
      '^@/(.*)$': '<rootDir>/src/$1',
      "^swiper/react$": "<rootDir>/__mocks__/swiper/react.js",
      "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
  };