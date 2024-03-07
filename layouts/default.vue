<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/ui/organisms/Header.vue';
  import Footer from '~/components/ui/organisms/Footer.vue';
</script>

<style lang="sass" scoped>

</style>