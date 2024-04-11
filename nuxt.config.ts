const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-github-pages/'
  }, 
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  }
})
