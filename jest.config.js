const { createDefaultPreset } = require('ts-jest');
const preset = createDefaultPreset();

/** @type {import('jest').Config} */
module.exports = {
  ...preset,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/services/api$1',
    '^@utils-types(.*)$': '<rootDir>/src/utils/types$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
