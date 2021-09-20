const { resolve } = require('path');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    moduleNameMapper: {
        '^@services': resolve(__dirname, './src/services/index'),
        '^@routers': resolve(__dirname, './src/routers/index'),
        '^@dao': resolve(__dirname, './src/dao/index'),
        '^@setup/(.*)$': resolve(__dirname, './src/setup/$1'),
        '^@setup': resolve(__dirname, './src/setup/index'),
    },
};
