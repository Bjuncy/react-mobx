
const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(
    proxy('/api', {
      // target: 'http://baojie-sit.vankeservice.com/',
      target: 'http://localhost:3000/',
      changeOrigin: true
    })
  )
}
