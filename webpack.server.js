const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
    return {
        mode: !!env.production ? 'production' : 'development',
        entry: './src/serverRenderer.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/serverRenderer.js',
            publicPath: '/',
            libraryTarget: 'commonjs2',
            clean: true,
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        name: 'server',
        target: 'node',
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    exportOnlyLocals: true,
                                },
                            },
                        },
                        'sass-loader'
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    type: 'asset/resource'
                }
            ],
        },
    }
};