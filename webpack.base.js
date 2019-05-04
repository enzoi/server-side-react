module.exports = {
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
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
