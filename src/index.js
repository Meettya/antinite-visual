/*
 * express demo server
 */
const express = require('express')
const app = express()
const webpack = require('webpack')

const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

app.set('view engine', 'pug')
app.use('/public', express.static('public'))
app.use('/data', express.static('data'))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

app.get('/', function (req, res) {
  res.render('index', { title: 'Antinit visual demo', message: 'Simply graph example' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
