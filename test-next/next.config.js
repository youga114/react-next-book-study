module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /.(png|jpg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]?[hash]",
                        emitFile: false,
                        publicPath: "/",
                    },
                },
            ],
        });
        return config;
    },
    images: {
        unoptimized: true, // 이미지 최적화 기능을 비활성화
    },
    exportPathMap: function () {
        return {
            "/page1": { page: "/page1" },
            "/page2-hello": { page: "/page2", query: { text: "hello" } },
            "/page2-world": { page: "/page2", query: { text: "world" } },
        };
    },
};
