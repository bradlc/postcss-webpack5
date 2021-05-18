const fs = require('fs')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcss = require('postcss')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  cache: {
    type: 'filesystem',
  },
  mode: 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  (root, result) => {
                    let file = path.resolve(__dirname, 'example.txt')
                    let contents = fs.readFileSync(file, 'utf8')

                    root.walkAtRules('contents', (node) => {
                      node.replaceWith(postcss.comment({ text: contents }))
                    })

                    // result.messages.push({
                    //   plugin: 'plugin',
                    //   type: 'dependency',
                    //   file,
                    //   parent: result.opts.from,
                    // })

                    return root
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
}
