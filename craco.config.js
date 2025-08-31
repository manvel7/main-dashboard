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
    configure: (webpackConfig, { env }) => {
      // ✅ Only set production optimizations when running `build`
      if (env === "production") {
        webpackConfig.mode = "production";

        // CSS extraction
        webpackConfig.plugins.push(
          new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
          })
        );

        // Purge unused CSS (skip in dev because too slow)
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

        // Optional: Bundle Analyzer
        // webpackConfig.plugins.push(
        //   new BundleAnalyzerPlugin({ analyzerMode: "server", openAnalyzer: false })
        // );
      }

      // SVG handling - import as React components
      const svgRule = webpackConfig.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes("svg")
      );

      if (svgRule) {
        svgRule.exclude = /\.svg$/;
      }

      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
