const path = require('path');

module.exports = {
	target: 'node',
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
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
