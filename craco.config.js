const path = require("path");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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
      // Only add bundle analyzer in production if you want
      // webpackConfig.plugins.push(
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: "server", // "static" for HTML file
      //     openAnalyzer: true,
      //   })
      // );
      return webpackConfig;
    },
  },
};
