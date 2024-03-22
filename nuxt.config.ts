// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:'Porfolio de Edu - Desarrollador Full-Stack con mas de 7 años de experiencia',
      meta:[
        {name: 'description', content:'Contrata a Edu para crear tu aplicación web o móvil. Dedicado a la creación de aplicaciones web robustas y escalables'},
        {name: 'charset', content:'utf-8'},
        {name: 'viewport', content:'width=device-width, initial-scale=1' }
      ],
    }
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Roboto: {
        wght:[300,400,700]
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports:{
    dirs:[
      'composables/**'
    ]
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
