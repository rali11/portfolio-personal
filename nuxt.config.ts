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
      link:[
        {rel:'preconnect', href:'https://fonts.googleapis.com'},
        {rel:'preconnect', href:'https://fonts.gstatic.com', crossorigin:'anonymous'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'}
      ]
    }
  },
  devtools: { enabled: false },
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
