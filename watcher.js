const webpack = require('webpack');
const dateFormat = require('dateformat');

const webpackConfig = require('./webpack-dev.config.js');
const server = require('./index');

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Development server is running on http://127.0.0.1:${port}`);
});

let compiler = webpack(webpackConfig, () => {
  compiler.watch({}, (err, stats) => {
    if (err || stats.hasErrors()) console.error(err);
    console.log(`Webpack refresh ${dateFormat(new Date(), 'HH:MM:ss')}`);
  });
});