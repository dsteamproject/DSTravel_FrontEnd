module.exports = {
    // 개발 서버 설정
    devServer: {
        // 프록시 설정
        proxy: {
            // 127.0.0.1:8080/REST/
            '/REST': {
                // 프록시 요청을 보낼 서버의 주소
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                logLevel: 'debug',
            }
        },

        // vue 의 포트번호
        //127.0.0.1:9090
        port: 9090
    },
    //publicPath: '/REST',
};