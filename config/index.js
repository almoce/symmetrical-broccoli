const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename:'[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer({})]
                        }
                    }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:5].css',
            chunkFilename: '[name].[chunkhash:5].css'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env.NODD_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
