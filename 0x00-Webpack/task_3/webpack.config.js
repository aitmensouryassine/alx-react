const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		header: {
			import: './modules/header/header.js',
		},
		body: {
			import: './modules/body/body.js',
		},
		footer: {
			import: './modules/footer/footer.js',
		},
		shared: 'jquery',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
		clean: true,
	},
	performance: {
		maxAssetSize: 1000000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: './public',
		port: 8564,
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			filename: path.join(__dirname, 'public', 'index.html'),
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
