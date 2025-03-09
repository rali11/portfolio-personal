<template>
  <component 
    :is="tag" 
    class="container"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  interface Props {
    tag: 'div' | 'section'
  }

  withDefaults(defineProps<Props>(),{
    tag:'div'
  })
  
</script>

<style lang="scss" scoped>

  .container {
    --container-width: #{$mobile};

    width: var(--container-width);
    margin: 0 auto;
    padding: 0 23px;

    @media(min-width: $desktop){
      --container-width: #{$desktop};
      padding: 0 143px;
    }
  }
</style>