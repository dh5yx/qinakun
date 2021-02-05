const path = require('path');
const packageName= require('./package').name;

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "/child/app2/" : "/",
    outputDir: 'dist',
    // assetsDir: 'static',
    filenameHashing: true,
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port:7102,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    },
};