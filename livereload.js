const nodemon = require('nodemon');
const dateFormat = require('dateformat');
const ON_DEATH = require('death');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

let webpackWatcher;

function liveReload() {
  const webpackWatcher = startWebpack();
  startNodemon();
}

function startNodemon() {
  nodemon({
    script: 'index.js',
    ext: 'js json',
    ignore: [
      'build/**/*',
      'src/client/**/*',
      'livereload.js'
    ]
  });
  nodemon.on('start', () => {
    console.log(chalk.yellow('Nodemon started...'));
  }).on('stop', () => {
    console.log(chalk.yellow('Nodemon stopped...'));
  }).on('restart', (files) => {
    console.log(`Server refresh ${dateFormat(new Date(), 'HH:MM:ss')}`);
    console.log(`Changed server file(s): ${chalk.yellow(files)}`)
  });
}

function stopNodemon() {
  nodemon.emit('stop');
}

function startWebpack() {
  let compiler = webpack(webpackConfig, () => {
    console.log(chalk.blue('Webpack started...'));
    webpackWatcher = compiler.watch({}, (err, stats) => {
      if (err || stats.hasErrors()) console.error(err);
      else {
        console.log(`Client refresh ${dateFormat(new Date(), 'HH:MM:ss')}`);
      }
    })
  });
  return webpackWatcher;
}

function stopWebpack() {
  webpackWatcher.close(() => {
    console.log(chalk.blue('Webpack stopped...'));
  });
}

if (require.main === module) {
  liveReload();
  ON_DEATH(() => {
    console.log('\n');
    stopNodemon();
    stopWebpack();
    process.exit(0);
  });
} else {
  module.exports = liveReload;
}