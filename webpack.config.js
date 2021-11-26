const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        assets: {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            type: 'asset/resource'
        },
        styles: {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    }

    if (env === 'production') {
        modules.styles.use.splice(0, 1, { loader: MiniCssExtractPlugin.loader })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    }

    return {
        modules,
        resolve,
    }
}