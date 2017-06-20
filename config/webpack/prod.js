'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
	return {
        devtool: 'source-map',
		watch: false
    };
}
