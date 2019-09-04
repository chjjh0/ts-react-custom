module.exports = {
    mode: 'development',

    entry: "./src/index.tsx",

    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },

    // 디버깅을 위해 빌드 결과물에 소스맵 추가
    devtool: "source-map",
    
    devServer: {
        contentBase: './src/public/',
        publicPath: '/dist'
    },

    resolve: {
        // 파일 확장자 처리
        extensions: [".ts", ".tsx", '.js']
    },

    module: {
        rules: [
            // .ts나 .tsx 확장자를 ts-loader가 트랜스파일 
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
        ]
    },
}