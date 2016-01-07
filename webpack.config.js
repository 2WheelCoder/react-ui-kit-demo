module.exports.getConfig = function(type) {
	return {
		watch: true,
		entry: './src/jsx/app.jsx',
		output: {
			path: __dirname,
			filename: 'app.js'
		},
		debug : true,
		module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015-loose', 'stage-1']
				}
			}]
		}
	};
}