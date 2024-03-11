<template>
  <Container>
    <h2>Sobre mi</h2>
    <article class="card">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
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
    gap: 38px;
    padding: 20px;
    border-width: 1px 0;
    border-radius: 20px;
    border-style: solid;
    border-color: $experience-item-card-border;
    background-color: $experience-item-card-bg;
    box-shadow: inset 0 -30px 100px rgba(38, 20, 87, .3);

    p {
      margin: 0;
    }
  }
</style>