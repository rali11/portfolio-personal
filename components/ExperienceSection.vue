<template>
  <Container tag="section">
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
  import { reactive } from 'vue';

  const experienceList = reactive([
    {
      title:'Desarrollador Full-Stack',
      company:'Policia Federal Argentina',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
      date:'2016 - Actualmente...'
    },
  ])

</script>

<style lang="scss" scoped>
  * + * {
    margin-top: 42px
  }
</style>