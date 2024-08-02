const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ws',
    createProxyMiddleware({
      target: 'ws://127.0.0.1:8080',
      ws: true,
      changeOrigin: true,
    })
  );
};