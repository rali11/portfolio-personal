<template>
  <div class="experience-item">
    <article class="card">
      <div class="ellipse" />
      <div class="card__header">
        <h4>{{ props.title }}</h4>
        <h5>{{ props.company }}</h5>
        <time>{{ props.date }}</time>
      </div>
      <p class="card__description">
        {{ props.descripcion }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    title: string
    company: string
    date: string
    descripcion: string
  }

  const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
  .experience-item {
    position: relative;
    padding: 0 0 60px 43px;
    border-color: $experience-item-line-history;
    border-width: 0 0 0 1px;
    border-style: solid;

    .ellipse {
      position: absolute;
      left: -6.5px;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      background-color: $experience-item-ellipse-bg;
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
    padding: 40px 50px;
    border-width: 1px 0;
    border-radius: 20px;
    border-style: solid;
    border-color: $experience-item-card-border;
    background-color: $experience-item-card-bg;
    box-shadow: inset 0 -30px 100px rgba(38, 20, 87, .3);

    &__header {
      display: flex;
      flex-direction: column;
      gap: 8px;

      h5 {
        margin: 0;
      }

      time {
        font-size: $fs-experience-item-card-time;
        color: $experience-item-card-text-time
      }
    }

    &__description {
      width: 100%;
      margin: 0;
      font-size: $fs-experience-item-card-text-description;
      color: $experience-item-card-text-description;
    }

    @media (min-width: $desktop) {
      gap: 54px;
  
      &__description {
        width: 64%;
      }
    }
  }
</style>