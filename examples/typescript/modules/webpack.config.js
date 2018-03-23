module.exports = {
    entry: "./src/main.ts",
    output: {
        path: __dirname,
        filename: "./bundle.js",
    },
    module: {
        rules: [{
            test: /\.tsx?/,
            loader: "ts-loader",
        }],
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    devtool: 'source-map',
    mode: "development",
};
