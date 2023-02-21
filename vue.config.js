module.exports = {
  pwa: {
    name: 'NAVCOMP',
    themeColor: '#991E2A',
    iconPaths: {
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/192x192.png',
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
    },
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
  },
}
