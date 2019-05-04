const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/client/client.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							[
								'@babel/preset-env',
								{
									targets: {
										browsers: ['last 2 versions']
									}
								}
							]
						]
					}
				},
				exclude: /node_modules/
			}
		]
	}
};
