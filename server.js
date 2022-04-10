const
  express = require('express'),
  path = require('path'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  { createProxyMiddleware } = require('http-proxy-middleware'),
  // eslint-disable-next-line no-unused-vars
  dotenv = require('dotenv').config().parsed,
  port = process.env.PORT || 3000

const app = express()
app.use(history())

app.use('/api', createProxyMiddleware({
  target: process.env.API_URL,
  changeOrigin: true,
  pathRewrite: { '^/api': '' }
}))

app.use('/country-api', createProxyMiddleware({
  target: process.env.COUNTRY_API,
  changeOrigin: true,
  pathRewrite: { '^/country-api': '' }
}))

// eslint-disable-next-line node/no-path-concat
app.use(serveStatic(__dirname + '/dist/spa'))
app.get('/*', function (req, res) {
  // res.sendFile(path.join(__dirname+'/dist/spa/index.html'));
  res.sendFile(path.join(__dirname, 'dist/spa', 'index.html'))
})
app.listen(port)
