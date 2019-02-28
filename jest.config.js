const {defaults} = require('jest-config');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.js']
};
