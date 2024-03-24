<template>
  <span class="badge">
    <slot />
  </span>
</template>

<script lang="ts" setup>
  interface Props {
    textColor: string
    backgroundColor: string
  }

  const props = withDefaults(defineProps<Props>(), {
    textColor:'#000',
    backgroundColor:'#fff'
  })

  const textColor = ref(props.textColor)
  const backgroundColor = ref(props.backgroundColor)
</script>

<style lang="scss" scoped>
  .badge {
    color : v-bind(textColor);
    background-color: v-bind(backgroundColor);
    border-radius: 15px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    width: max-content;
    gap: 5px;
    font-size: .9rem;  
    margin: 0;
  }
</style>