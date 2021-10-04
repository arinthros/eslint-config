/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, './base.js'),
    path.join(__dirname, './rules/cypress/index.js'),
    path.join(__dirname, './rules/import/index.js'),
    path.join(__dirname, './rules/jest/index.js'),
    path.join(__dirname, './rules/jsdoc/index.js'),
    path.join(__dirname, './rules/react/index.js'),
  ],
}
