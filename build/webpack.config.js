const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'production',
    // 打包入口文件
    entry: path.resolve(__dirname, '../packages/d-ui/index.ts'),
    output: {
        // 打包输出目录
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'd-ui',
    },
    externals: { // 排除vue打包
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
        },
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}