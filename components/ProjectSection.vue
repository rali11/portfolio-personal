<template>
  <Container 
    id="projects"
    tag="section"
  >
    <h2>Proyectos</h2>
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
      imgUrl:'/projects/project-quiz.webp',
      codeUrl:'https://github.com/rali11/country-quiz-2',
      previewUrl:'https://musical-meringue-211f04.netlify.app/'
    },
    {
      title: 'Weather App - Información del Clima',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
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