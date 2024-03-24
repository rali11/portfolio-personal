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
      />
    </div>
  </Container>
</template>

<script lang="ts" setup>

  const projectList = reactive([
    {
      title: 'Quiz App - Trivia de banderas y capitales',
      description: 'Quiz sobre geografia. Preguntas para adivinar la capital de un país o a que país pertenece una bandera. Desarrollado con Vue y Sass.',
      imgUrl:'/projects/project-quiz.webp',
      codeUrl:'https://github.com/rali11/country-quiz-2',
      previewUrl:'https://musical-meringue-211f04.netlify.app/'
    },
    {
      title: 'Weather App - Información del Clima',
      description: 'Es una aplicación de pronóstico del tiempo que proporciona información en tiempo real y pronósticos para los próximos 5 días. Incluye datos sobre la humedad, visibilidad, presión del aire y velocidad del viento. Desarrollado con Vue.',
      imgUrl:'/projects/project-weather.webp',
      codeUrl:'https://github.com/rali11/weather-app',
      previewUrl:'https://admirable-trifle-5afe73.netlify.app'
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