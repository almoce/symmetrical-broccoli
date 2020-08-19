module.exports = {
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        disableHostCheck: true,
        proxy: [
            {
                path: '/api/**',
                target: 'http://192.168.0.124:1001'
            }
        ]
    }

}
