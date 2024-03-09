<template>
  <Container tag="section">
    <div class="hero">
      <h1>Hola, Soy Eduardo</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
      <div class="links">
        <ButtonLink 
          url="mailto:rauleduardo.correa21@gmail.com"
          pill
        >
          Contáctame
        </ButtonLink>
        <ButtonLink
          type="secondary"
          url="https://www.linkedin.com/in/eduardo-raul-correa-87a028214"
          target="_blank"
          pill
        >
          LinkedIn
        </ButtonLink>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from '~/components/ui/objects/Container.vue';
  import ButtonLink from './ui/atoms/ButtonLink.vue';
</script>

<style lang="scss" scoped>

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-align: center;
    width: 100%;

    p {
      width: 70%;
      text-align: center;
      line-height: 25px;
      font-size: $fs-subtitle;
      font-weight: 400;
      color: $text-secondary-2;
    }

    .links {
      display: flex;
      justify-content: center;
      gap: 16px;
    }
  }

</style>