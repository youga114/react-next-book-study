const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                chrome: "67",
            },
            useBuiltIns: "usage",
            corejs: { version: 3, proposals: true },
        },
    ],
];

module.exports = { presets };
