const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
	chainWebpack: (config) => {
		config.plugin("CompressionPlugin").use(CompressionPlugin)
	},
	transpileDependencies: ["vuetify"],
}
