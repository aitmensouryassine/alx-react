const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		hot: true,
	},
	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			name: 'index.html',
			inject: false,
			template: './dist/index.html',
		}),
	],
};
