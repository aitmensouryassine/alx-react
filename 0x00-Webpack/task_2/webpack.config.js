const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: ImageMinimizerPlugin.loader,
				enforce: 'pre',
				options: {
					generator: [
						{
							preset: 'webp',
							implementation: ImageMinimizerPlugin.imageminGenerate,
							options: {
								plugins: ['imagemin-webp'],
							},
						},
					],
				},
			},
		],
	},
};
