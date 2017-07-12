/*
 * express demo server
 */
const express = require('express')
const app = express()
const webpack = require('webpack')
const path = require('path')

const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/data', express.static(path.join(__dirname, 'data')))

// to check real lib
app.use('/lib', express.static(path.join(__dirname, '..', 'lib')))

// to check dev
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
