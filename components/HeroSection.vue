<template>
  <Container tag="section">
    <div class="hero">
      <h1>Hola, Soy Eduardo</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from '~/components/ui/objects/Container.vue';
</script>

<style lang="scss" scoped>

  .hero {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;

    p {
      width: 70%;
      text-align: center;
      font-size: $fs-subtitle;
      font-weight: 400;
      color:n$text-secondary-2;
    }
  }

</style>