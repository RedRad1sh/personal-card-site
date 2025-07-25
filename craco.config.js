module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                fs: false,
                path: false,
                stream: false,
                crypto: false,
                util: false,
                url: false,
                buffer: false,
            };
            return webpackConfig;
        }
    },
    plugins: [{
        plugin: require('@semantic-ui-react/craco-less')
    }],
}