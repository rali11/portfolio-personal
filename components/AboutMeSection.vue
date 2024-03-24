<template>
  <Container 
    id="aboutMe"
    tag="section"
  >
    <h2>Sobre mi</h2>
    <article class="card">
      <p>
        Me llamo Raúl Eduardo Correa. Estudié en una escuela secundaria técnica, 
        en donde tuve mis primeros pasos con la programación. 
        En la actualidad, desempeño el rol de <strong>líder de equipo y desarrollador en un organismo estatal</strong>.
      </p>
      <p>
        Algunos de mis aportes dentro de mi trabajo, fueron 
        <strong>
          liderar la adopción de frameworks modernos como Vue.js. 
        </strong>
        Dicha herramienta fue implementada con éxito tanto en 
        proyectos existentes como en los nuevos. 
      </p>
      <p>
        A lo largo de mi carrera, he tenido la oportunidad de 
        trabajar en diversos proyectos los cuales me han 
        brindado 
        <strong>
          una sólida comprensión de cómo la tecnología puede transformar y mejorar los servicios y procesos dentro de una organización.
        </strong>
      </p>
    </article>
  </Container>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 37px;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    border-width: 1px 0;
    border-radius: 20px;
    border-style: solid;
    border-color: $experience-item-card-border;
    background-color: $experience-item-card-bg;
    box-shadow: inset 0 -30px 100px rgba(38, 20, 87, .3);

    p {
      margin: 0;
      line-height: 25px;
      
      strong{
        color: $about-me-text-strong;
      }
    }
  }
</style>