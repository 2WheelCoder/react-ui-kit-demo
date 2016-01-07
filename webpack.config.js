module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    watch: true,
    entry: './src/jsx/app.jsx',
    output: {
      path: __dirname,
      filename: 'app.js'
    },
    debug : isDev,
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

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}