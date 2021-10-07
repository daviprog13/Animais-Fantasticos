const path = require('path');

module.exports = {
    entry: './JS/script.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: './main.js/main.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
            },
        }],
    },
};