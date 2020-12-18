module.exports = {
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        proxy: [
            {
                path: '/api/**',
                target: 'http://192.168.0.124:1001'
            },
            {
                path: '/proxy/**',
                target: 'http://www.google.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': '/'
                }
            
            }
        ]
    }

}
