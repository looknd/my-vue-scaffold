module.exports = {
    publicPath: '/dist/',
    devServer: {
        port: 3000,
        proxy: {
            // '/api/auth/': {
            //     target: 'http://api.example.dev',
            //     changeOrigin: true,
            //     pathRewrite: { '^/api': '' }
            // }
        }
    }
}