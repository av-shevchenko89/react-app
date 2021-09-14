module.exports = (env) => {
    return env.production ?
        require('./webpack.prod.js') : require('./webpack.dev.js');
};
