const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob-all");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");


const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    configure: (webpackConfig) => {
      // Production mode
      webpackConfig.mode = "production";

      // Optimization: Code splitting (vendors, common, runtime)
      webpackConfig.optimization = {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
            common: {
              test: /[\\/]src[\\/]shared[\\/]/,
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
        runtimeChunk: "single",
      };

      // CSS extraction
      webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash:8].css",
          chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        })
      );

      // Purge unused CSS
      webpackConfig.plugins.push(
        new PurgeCSSPlugin({
          paths: glob.sync([
            `${PATHS.src}/**/*.{js,jsx,ts,tsx}`,
            "public/index.html",
          ]),
          safelist: {
            standard: [/^Mui/, /^ant-/], // keep MUI / Ant Design classes
          },
        })
      );

      // Asset handling (images/fonts)
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
      });

      webpackConfig.module.rules.push({
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      });

      // Optional: Bundle Analyzer
      // webpackConfig.plugins.push(
      //   new BundleAnalyzerPlugin({ analyzerMode: "server", openAnalyzer: false })
      // );

      return webpackConfig;
    },
  },
};
