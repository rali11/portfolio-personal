<template>
  <Container 
    id="projects"
    tag="section"
  >
    <h2>Proyectos personales</h2>
    <div>
      <ProjectItem 
        v-for="(project, index) in projectList"
        :key="index"
        :title="project.title"
        :description="project.description"
        :img-url="project.imgUrl"
        :code-url="project.codeUrl"
        :preview-url="project.previewUrl"
      >
        <Badge 
          v-for="(badge, badgeIndex) in project.badges"
          :key="badgeIndex"
          :text-color="badge.textColor"
          :background-color="badge.backgroundColor"
        >
          <Component 
            :is="resolveComponent(badge.icon)"
            width="1rem"
            height="1rem" 
          />
          {{ badge.text }}
        </Badge>
      </ProjectItem>
    </div>
  </Container>
</template>

<script lang="ts" setup>

  const projectList = reactive([
    {
      title: 'Cripto-Currency App - Criptomonedas en tiempo real',
      description: 'Aplicación para consultar el precio de las criptomonedas en tiempo real. Desarrollado con Vue y Sass.',
      imgUrl:'/projects/project-cripto.webp',
      codeUrl:'https://github.com/rali11/cripto-currency',
      previewUrl:'https://ornate-babka-5084a4.netlify.app',
      badges:[
        { textColor:'#42B883', backgroundColor:'#2f2f2f', text:'Vue.js',icon:'VueIcon'},
        { textColor:'#bf4080', backgroundColor:'#2f2f2f', text:'Sass',icon:'SassIcon'},
      ]
    },
    {
      title: 'Quiz App - Trivia de banderas y capitales',
      description: 'Quiz sobre geografia. Preguntas para adivinar la capital de un país o a que país pertenece una bandera. Desarrollado con Vue y Sass.',
      imgUrl:'/projects/project-quiz.webp',
      codeUrl:'https://github.com/rali11/country-quiz-2',
      previewUrl:'https://musical-meringue-211f04.netlify.app/',
      badges:[
        { textColor:'#42B883', backgroundColor:'#2f2f2f', text:'Vue.js',icon:'VueIcon'},
        { textColor:'#bf4080', backgroundColor:'#2f2f2f', text:'Sass',icon:'SassIcon'},
      ]
    },
    {
      title: 'Weather App - Información del Clima',
      description: 'Es una aplicación de pronóstico del tiempo que proporciona información en tiempo real y pronósticos para los próximos 5 días. Incluye datos sobre la humedad, visibilidad, presión del aire y velocidad del viento. Desarrollado con Vue.',
      imgUrl:'/projects/project-weather.webp',
      codeUrl:'https://github.com/rali11/weather-app',
      previewUrl:'https://admirable-trifle-5afe73.netlify.app',
      badges:[
        { textColor:'#42B883', backgroundColor:'#2f2f2f', text:'Vue.js',icon:'VueIcon'},
      ]
    }
  ])

</script>

<style lang="scss" scoped>
  section {
    h2 {
      margin-bottom: 42px;
    }
  
    div {
      * + * {
        margin-top: 68px;
      }
    }
  }
</style>