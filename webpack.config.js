const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
       'vue-tools': './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'main.js',
        libraryTarget: 'umd',
        library: 'vue-tools',
        umdNamedDefine: true
    },
    plugins: [
        //new uglifyjs(),
    ],
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    }
};