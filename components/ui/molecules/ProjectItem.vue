<template>
  <article>
    <figure>
      <img :src="props.imgUrl">
    </figure>
    <div>
      <header>
        <h3>{{ props.title }}</h3>
      </header>
      <div class="badge-list">
        <slot />
      </div>
      <p>
        {{ props.description }}
      </p>
      <footer>
        <ButtonLink 
          v-show="props.codeUrl"
          type="secondary"
          target="_blank"
          :url="props.codeUrl"
        >
          Code
        </ButtonLink>
        <ButtonLink 
          v-show="props.previewUrl"
          type="secondary"
          target="_blank"
          :url="props.previewUrl"
        >
          Preview
        </ButtonLink>
      </footer>
    </div>
  </article>
</template>

<script lang="ts" setup>

  interface Props {
    title: string
    description: string
    imgUrl: string
    codeUrl?: string
    previewUrl?: string
  }

  const props = withDefaults(defineProps<Props>(),{
    codeUrl:'',
    previewUrl:'',
    img:''
  })

</script>

<style lang="scss" scoped>
  article {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .badge-list {
      display: flex;
      gap: 5px;
      margin: 10px 0px;
    }

    figure {
      margin: 0;

      img {
        width: 100%;
        height: 274px;
        border: rgba(255, 255, 255, .3) solid 1px;
        border-radius: 20px;
        box-shadow: 100px 0 100px $project-item-img-shadow;

        @media (min-width: $desktop) {
          width: 415px;
        }
      }
    }

    p {
      font-size: $fs-project-item-description;
      color: $project-item-description-text;
      line-height: 1.4rem;
    }

    footer {
      display: flex;
      gap: 17px;
    }

    @media (min-width: $desktop) {
      flex-direction: row;
      gap: 72px;
    }
  }

</style>