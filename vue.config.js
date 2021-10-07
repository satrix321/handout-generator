module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/handout-generator/" : "/",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    }
  },
};
