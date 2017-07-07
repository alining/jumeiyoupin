require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

//引入数据库
var apiRoutes=express.Router();
//首页
var HomeLists=require("../mock/TodyLists.json");
var homeNavData=require("../mock/homeNavData.json");
var TomorrowLists=require("../mock/TomorrowLists.json");
var contsData=require("../mock/contsData.json");
var Baby=require("../mock/Baby.json");
var Luxurious=require("../mock/Luxurious.json");
var brands=require("../mock/brands.json");

var teamNavData=require("../mock/teamNavData.json");
var recommendData=require("../mock/recommendData.json");
var healthData=require("../mock/healthData.json");
var infantData=require("../mock/infantData.json");
var cosmeticData=require("../mock/cosmeticData.json");
var homeData=require("../mock/homeData.json");
var underwearData=require("../mock/underwearData.json");
var womenData=require("../mock/womenData.json");
var footwearData=require("../mock/footwearData.json");
var bagsData=require("../mock/bagsData.json");
var cosplayData=require("../mock/cosplayData.json");
var outDoorData=require("../mock/outDoorData.json");
var otherData=require("../mock/otherData.json");
var nextData=require("../mock/nextData.json");

//使用api的方法来创建连接时候的请求
apiRoutes.get('/TodyLists',function(req,res){
  res.json(HomeLists);
})
apiRoutes.get('/homeNavData',function(req,res){
  res.json(homeNavData);
})
apiRoutes.get('/TomorrowLists',function(req,res){
  res.json(TomorrowLists);
})
apiRoutes.get('/contsData',function(req,res){
  res.json(contsData);
})
apiRoutes.get('/Baby',function(req,res){
  res.json(Baby);
})
apiRoutes.get('/Luxurious',function(req,res){
  res.json(Luxurious);
})
apiRoutes.get('/brands',function(req,res){
  res.json(brands);
})
apiRoutes.get('/teamNavData',function(req,res){
  res.json(teamNavData);
})
apiRoutes.get('/recommendData',function(req,res){
  res.json(recommendData);
})
apiRoutes.get('/healthData',function(req,res){
  res.json(healthData);
})
apiRoutes.get('/infantData',function(req,res){
  res.json(infantData);
})
apiRoutes.get('/cosmeticData',function(req,res){
  res.json(cosmeticData);
})
apiRoutes.get('/homeData',function(req,res){
  res.json(homeData);
})
apiRoutes.get('/underwearData',function(req,res){
  res.json(underwearData);
})
apiRoutes.get('/womenData',function(req,res){
  res.json(womenData);
})
apiRoutes.get('/footwearData',function(req,res){
  res.json(footwearData);
})
apiRoutes.get('/bagsData',function(req,res){
  res.json(bagsData);
})
apiRoutes.get('/cosplayData',function(req,res){
  res.json(cosplayData);
})
apiRoutes.get('/outDoorData',function(req,res){
  res.json(outDoorData);
})
apiRoutes.get('/otherData',function(req,res){
  res.json(otherData);
})
apiRoutes.get('/nextData',function(req,res){
  res.json(nextData);
})



app.use("/api",apiRoutes)

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
