<template>
  <header :class="backgroundScroll">
    <Container tag="div">
      <nav>
        <ul>
          <li><a href="#">Experiencia</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </Container>
  </header>
</template>

<script setup lang="ts">

  const { y } = useScrollWindow()

  const backgroundScroll = computed(() => y.value > 10 ? 'background-scroll':'')

</script>

<style lang="scss" scoped>

  .background-scroll {
    background-color: $header-scroll-bg;
    z-index: 1;
    transition: background-color .2s;
  }

  header {
    position: sticky;
    top: 0;
    height: 69px;
    display: flex;
    align-items: center;
    border-color: $header-border-color;
    border-width: 0 0 1px 0;
    border-style: solid;
    transition: background-color .2s;
    
    nav {
      display:flex;
      justify-content: center;
      font-size: $fs-header-text;
      font-weight: bold;
  
      ul {
        display: flex;
        gap: 35px;
        margin: 0;
        color: $text-primary;
        padding: 0;
  
        li {
          list-style: none;
        }

        a {
          color: $text-primary;
          text-decoration: none;
        }
      }
    }
  }
</style>