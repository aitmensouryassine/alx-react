const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/, // files ending with .css
				use: ['style-loader', 'css-loader'], // use style and css loaders
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	devtool: 'inline-source-map', // enable inline source maps
	devServer: {
		contentBase: './dist', // serve content from the 'dist' directory
		hot: true, // enable hot module replacement
	},
};
