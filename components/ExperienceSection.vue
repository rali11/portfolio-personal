<template>
  <Container 
    id="experience"
    tag="section" 
  >
    <h2>Experiencia laboral</h2>
    <ExperienceItem 
      v-for="(item, index) in experienceList" 
      :key="index"
      :title="item.title"
      :company="item.company"
      :descripcion="item.descripcion"
      :date="item.date"
    />
  </Container>
</template>

<script setup lang="ts">

  const experienceList = reactive([
    {
      title:'Desarrollador Full-Stack',
      company:'Policia Federal Argentina',
      descripcion:`Lider y desarrollador de equipo. 
       Responsable del mantenimiento y mejora continua de varias aplicaciones web críticas, 
       algunas de ellas se encargan de la gestión de moviles policiales, y administración de credenciales. 
       Lenguajes utilizados: Javascript (Vue.js), PHP (Symfony) y PL-SQL (Oracle DB). 
      `,
      date:'2016 - Actualmente...'
    },
  ])

</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 42px
  }

</style>