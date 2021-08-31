const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
    mode: options.mode,
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            title: 'Micro Frontends',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ]
});
