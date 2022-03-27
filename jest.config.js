/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  forceExit: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@loaders/(.*)': '<rootDir>/src/loaders/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
