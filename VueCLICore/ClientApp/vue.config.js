module.exports = {
    lintOnSave: false,

    // Only used in production
    indexPath: './../../Views/Shared/_Layout.cshtml',

    chainWebpack: config => {
        // aspnet uses the other hmr so remove this one
        config.plugins.delete('hmr');

        // switch to _Layout.cshtml
        config.plugin('html').tap(args => {
            args[0].filename = './../../Views/Shared/_Layout.cshtml';
            args[0].template = '../Views/Shared/_LayoutTemplate.cshtml';
            args[0].minify = false;
            return args;
        });
    }
}