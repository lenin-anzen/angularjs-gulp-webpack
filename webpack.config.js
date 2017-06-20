'use strict';

const path = require('path');

function buildConfig(env) {
    return require(path.resolve(__dirname, 'config/webpack/' + env + '.js'))(env)
}

module.exports = buildConfig;