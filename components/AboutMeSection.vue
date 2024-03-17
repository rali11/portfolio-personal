<template>
  <Container 
    id="aboutMe"
    tag="section"
  >
    <h2>Sobre mi</h2>
    <article class="card">
      <p>
        Me llamo Raúl Eduardo Correa. Mi primer acercamiento con la programación
        fue en la escuela secundaria. En la actualidad, desempeño el rol de 
        <strong>líder de equipo y desarrollador en un organismo estatal</strong>.
      </p>
      <p>
        A lo largo de mi carrera, he tenido la oportunidad de trabajar en diversos 
        proyectos. Estas experiencias me han brindado <strong>una sólida comprensión</strong> de 
        cómo la tecnología puede transformar y mejorar los servicios y procesos 
        dentro de una organización.
      </p>
      <p>
        Algunos de los proyectos en los que participe incluyen el desarrollo de aplicaciones web
        para la 
        <strong>
          gestión y control de los tickets de combustible de la flota vehicular, y
          de credenciales del personal.
        </strong>
        Ambas aplicaciones cumplen un rol importante dentro de la institución.
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