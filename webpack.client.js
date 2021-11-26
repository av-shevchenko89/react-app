const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimize: false,
        minimizer: [],
    }

    const plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/Html/Browser.html',
        }),
        new WebpackNotifierPlugin({ alwaysNotify: false }),
    ]

    if (isProd) {
        optimizations.minimize = true;
        optimizations.minimizer.push(new TerserPlugin())
        plugins.push(new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }))
    }

    return {
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 4200,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: config.resolve,
        module: {
            rules: [
                config.modules.js,
                config.modules.assets,
                config.modules.styles,
            ],
        },
        plugins,
        entry: {
            main: './src/Client.tsx',
        },
        output: {
            filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            clean: true,
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    }
}