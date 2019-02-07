import browserSync from 'browser-sync';
import config from '../webpack.config.dev';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const bundler = webpack(config);

browserSync({
  port: 8000,
  ui: false,
  ghostMode: false,
  server: {
    baseDir: 'app',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: 'errors-only',
      }),

      webpackHotMiddleware(bundler),
    ],
  },
});
