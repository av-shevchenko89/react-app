/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  collectCoverage: true,
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|svg)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  "setupFilesAfterEnv": [
    "<rootDir>/jest-setup.ts"
  ]
};