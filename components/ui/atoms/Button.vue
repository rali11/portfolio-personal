<template>
  <button :class="[buttonType, props.pill ? 'pill' : '']">
    <slot />
  </button>
</template>

<script setup lang="ts">

  interface Props {
    type?: 'cta' | 'secondary',
    pill?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'cta',
    pill: false
  })

  const buttonType = computed<string>(() => props.type === 'cta' ? 'cta' : 'button-secondary')
  
</script>

<style lang="scss" scoped>
  .cta {
    padding: 8px 12px;
    border: $cta-border solid 1px;
    border-radius: 10px;
    background-color: $cta-bg;
    color: $cta-text;
    transition: all .3s;
  
    &:hover {
      box-shadow: 0px 0px 20px 0px rgba(31, 29, 29, 0.5) inset;
      transition: all .3s;
    }
  }

  .button-secondary {
    padding: 8px 12px;
    border: $button-secondary-border solid 1px;
    border-radius: 10px;
    background-color: $button-secondary-bg;
    color: $button-secondary-text;
    transition: all .3s;

    &:hover {
      background-color: $button-secondary-hover-bg;
      border-color: $button-secondary-hover-border;
      transition: all .3s;
    }
  }

  .pill {
    padding: 4px 16px;
    border-radius: 15px;
  }
</style>