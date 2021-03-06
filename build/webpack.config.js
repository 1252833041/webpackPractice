const HTMLPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry:'./src/index.js',
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	module:{
		rules:[
			{
				test:/.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new HTMLPlugin({
			template: 'index.html',
		})
	]
	
}