// PWA Config
const appName = 'App Gamificada of values'
const appShortName = 'App Gamificada'
const appDescription = 'Gamified application for teaching values'
const appImage = '@/public/icon.png'
const appUrl = 'https://example.com/'
const appLang = 'es'
const appColorTheme = '#9dd7c7'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  css: ['assets/main.scss'],
  // enable takeover mode
  typescript: { shim: false },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@kevinmarrec/nuxt-pwa'
  ],
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'Valores',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: appUrl },

        { rel: 'preload', as: 'image', href: 'images/auth/bottom-bg.svg' },
        { rel: 'preload', as: 'image', href: 'images/auth/bg.svg' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: appDescription
        },
        { property: 'og:site_name', content: appName },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: appUrl
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: appImage
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: appName
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: appDescription
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: appImage
        },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: appUrl
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: appName
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: appDescription
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: appImage
        }
      ]
    }
  },
  vuetify: {
    vuetifyOptions: {},
    moduleOptions: {
      treeshaking: true,
      styles: 'sass'
    }
  },
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  pwa: {
    meta: {
      name: appShortName,
      author: 'RrQq',
      theme_color: appColorTheme,
      description: appDescription,
      lang: appLang
    },
    manifest: {
      name: appName,
      short_name: appShortName,
      description: appDescription,
      theme_color: appColorTheme,
      lang: appLang
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_API_URL || 'http://localhost:8000'
    }
  }
})
