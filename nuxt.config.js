export default {
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Upgrade-Doge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
    ]
  },

  server: {
    port: 3880,
    host: "0.0.0.0"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./static/font/CAI978-388/CAI978-388.css",
    "./static/font/CAI978-865/CAI978-865.css",
    "./static/font/CAI978-606/CAI978-606.css",
  ],

  /*
  ** 全局 SCSS
  */
  styleResources: {
    scss: "./assets/css/*.scss"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/iview", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: true,
      },
    },

    analyze: false, //打包文件分析  ,使用npm run build后弹出页面

    //按需引入
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "view-design",
            libraryDirectory: "src/components",
          },
        ],
      ],
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
  }
}
