<template>
  <footer>
    <Container tag="div">
      <nav>
        <p>
          © 2024 edu. Casi todos los derechos reservados
        </p>
        <ul class="links">
          <li>
            <a href="#aboutMe">Sobre mí</a>
          </li>
          <li>
            <a href="mailto:rauleduardo.correa21@gmail.com">Contacto</a>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>
</template>
  
<script setup lang="ts">
  import Container from '../objects/Container.vue';
</script>

<style lang="scss" scoped>
  footer {
    border-color: $header-border-color;
    border-width: 1px 0 0 0;
    border-style: solid;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $text-primary;
      font-size: $fs-footer-text;
      text-align: center;

      @media(min-width: $desktop){
        flex-direction: row;
        justify-content: space-between;
      }

      .links {
        display: flex;
        gap: 28px;
        padding: 0;
        justify-self: center;
        list-style-type: none;

        a {
          color: $text-primary;
          text-decoration: none;
        }
      }
    }
  }
</style>