// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Roboto: {
        wght:[300,400,700]
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/settings/_variables.scss" as *;'
        }
      }
    }
  }
})
