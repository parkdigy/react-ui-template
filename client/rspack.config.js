const path = require('node:path');
const fs = require('node:fs');
const rspack = require('@rspack/core');
const { ReactRefreshRspackPlugin } = require('@rspack/plugin-react-refresh');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const env = {
  ...require('dotenv').config({ path: path.resolve(__dirname, '../.env'), quiet: true }).parsed,
  ...process.env,
};
const MyProvidePlugin = require('./rspack/ProvidePlugin');

const isProduction = process.env.NODE_ENV === 'production';
const appConfig = isProduction
  ? "{version: '<%= version %>', env: '<%= appEnv %>', title: '<%= title %>'}"
  : JSON.stringify({ version: String(Date.now()), env: env.APP_ENV, title: env.APP_NAME });

class AppHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('AppHtmlPlugin', (compilation) => {
      rspack.HtmlRspackPlugin.getCompilationHooks(compilation).beforeEmit.tap('AppHtmlPlugin', (data) => {
        const version = String(Date.now());
        const config = appConfig.replace('<%= version %>', version).replace(/<\/script/gi, '<\\/script');
        const title = isProduction
          ? '<%= title %>'
          : String(env.APP_NAME || '').replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
        // Inject after HTML serialization so Express receives literal EJS placeholders.
        data.html = data.html.replace(
          '</head>',
          () => `<title>${title}</title><script>window.$$MyAppConfig = ${config}</script></head>`
        );
        return data;
      });
    });
  }
}

class BuildStatsPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('BuildStatsPlugin', (stats) => {
      if (stats.hasErrors()) return;
      const reportPath = path.resolve(__dirname, 'build');
      fs.mkdirSync(reportPath, { recursive: true });
      fs.writeFileSync(
        path.join(reportPath, 'stats.json'),
        JSON.stringify(stats.toJson({ all: false, assets: true, chunks: true, modules: true }))
      );
    });
  }
}

function vendorChunkName(module) {
  const packagePath = module.context?.split(/[\\/]node_modules[\\/]/).pop();
  if (!packagePath || packagePath === module.context) return;
  const [scope, name] = packagePath.split(/[\\/]/);
  return scope === '@pdg' ? `vendors/_pdg_${name}` : `vendors/${scope.replace('@', '')}`;
}

module.exports = {
  context: __dirname,
  mode: isProduction ? 'production' : 'development',
  devtool: false,
  target: 'browserslist',
  entry: './src',
  // Rspack CLI otherwise enables on-demand compilation for the development server.
  lazyCompilation: false,
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    tsConfig: path.resolve(__dirname, 'tsconfig.json'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunks/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },
  devServer: {
    host: env.APP_HOST,
    port: Number(env.APP_PORT),
    hot: true,
    historyApiFallback: true,
    client: { overlay: { errors: false, warnings: false, runtimeErrors: false }, progress: false },
    proxy: env.API_URL
      ? [
          {
            context: ['/api'],
            target: env.API_URL,
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
            logger: { info: () => {}, warn: console.warn, error: console.error },
          },
        ]
      : [],
  },
  performance: {
    hints: isProduction ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: isProduction,
    runtimeChunk: true,
    removeAvailableModules: isProduction,
    removeEmptyChunks: isProduction,
    splitChunks: isProduction
      ? {
          chunks: 'all',
          cacheGroups: {
            common: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|stylis)[\\/]/,
              chunks: 'all',
              name(module) {
                return vendorChunkName(module)?.replace('vendors/', 'vendors/_common_');
              },
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name: vendorChunkName,
            },
          },
        }
      : {},
  },
  plugins: [
    new MyProvidePlugin(),
    new rspack.HtmlRspackPlugin({ template: './public/index.html' }),
    new AppHtmlPlugin(),
    new rspack.CopyRspackPlugin({ patterns: [{ from: './public/robots.txt' }] }),
    new rspack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    ...(isProduction
      ? [
          new rspack.CircularCheckRspackPlugin({ exclude: /a\.js|node_modules/, failOnError: true }),
          new rspack.CssExtractRspackPlugin({ filename: 'css/[name].[contenthash].css' }),
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: '../build/report.html',
          }),
          new BuildStatsPlugin(),
        ]
      : [
          new rspack.SourceMapDevToolPlugin({ filename: '[file].map' }),
          new ReactRefreshRspackPlugin({ overlay: false }),
        ]),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: 'pre',
        resolve: { fullySpecified: false },
        loader: 'source-map-loader',
      },
      {
        oneOf: [
          ...(isProduction
            ? [
                {
                  test: /[\\/]src[\\/]component[\\/]@Dev[\\/]/,
                  type: 'javascript/auto',
                  loader: 'ignore-loader',
                },
              ]
            : []),
          {
            test: /\.[jt]sx?$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: { syntax: 'typescript', tsx: true },
                transform: {
                  react: { runtime: 'automatic', development: !isProduction, refresh: !isProduction },
                  reactCompiler: { target: '19', panicThreshold: 'all_errors' },
                },
              },
              env: { mode: 'usage', coreJs: require('core-js/package.json').version, proposals: true },
            },
          },
          {
            test: /\.(sa|sc|c)ss$/,
            type: 'javascript/auto',
            use: [
              isProduction
                ? { loader: rspack.CssExtractRspackPlugin.loader, options: { publicPath: '../' } }
                : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          { test: /\.html$/i, loader: 'html-loader', options: { minimize: true } },
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            type: 'javascript/auto',
            use: [
              { loader: '@svgr/webpack', options: { exportType: 'named', namedExport: 'ReactComponent' } },
              { loader: 'url-loader', options: { limit: 100 * 1024, name: 'assets/[name].[contenthash].[ext]' } },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset',
            parser: { dataUrlCondition: { maxSize: 100 * 1024 } },
          },
          { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource' },
          { test: /\.(txt|md)$/i, type: 'asset/source' },
        ],
      },
    ],
  },
};
