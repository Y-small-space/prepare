const path = require('path');
module.exports = {
	mode: 'development',
	devtool: false,
	/*     entry:'./src/index.js',
			entry:{
					main:'./src/index.js'
			}, */
	entry: {
		main: { import: ['./src/index.js'] }
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	}
}