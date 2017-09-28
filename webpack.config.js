var { DefinePlugin } = require('webpack');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/main.js',
  // Where should the compiled file go?
  output: {
    filename: 'bundle.js'
  },

  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  },
  extensions: ['.js', '.vue']

},
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /(node_modules|bower_components)/,
        // Transform it with vue
      use: {
        loader: 'vue-loader'
      }
    }
  ]
},
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 4000),
        TARGET_PLATFORM: JSON.stringify('dom')
      }
    })
  ]


// devServer: {
       // port: 3000
   // }
};
