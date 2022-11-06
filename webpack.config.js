const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg: {
                            progressive: true,
                        },
                        optipng: {
                            enabled: true,
                        },
                        pngquant: {
                            quality: [0.65, 0.9],
                            speed: 4,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75,
                        },
                    },
                },
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        port: 8080,
        open: true,
        hot: true,
    },
};
