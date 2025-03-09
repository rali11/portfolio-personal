<template>
  <div class="background">
    <div class="ellipse-1" />
    <div class="ellipse-2" />
    <div class="ellipse-3" />
    <div class="ellipse-4" />
    <div class="ellipse-animation" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .background {
    --ellipse-1-width: 240px;
    --ellipse-2-width: 360px;
    --container-top: 439px;
    
    @media(min-width: $desktop){
      --ellipse-1-width: 1175px;
      --ellipse-2-width: 1237px;
      --container-top: 360px;
      padding: 0 143px;
    }

    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: var(--container-top);
    left: 0;
    z-index: -1;

    .ellipse-1 {
      position: absolute;
      background-color: #D9D9D9;
      width: var(--ellipse-1-width);
      height: 751px;
      border-radius: 100%;
      box-shadow: 0px -10px 100px 70px rgba(102,49,241,0.66);
      z-index: 1;
    }

    .ellipse-2 {
      position: absolute;
      background-color: #D9D9D9;
      width: var(--ellipse-2-width);
      height: 751px;
      border-radius: 100%;
      box-shadow: 0px -10px 66px 8px rgba(158,123,252,0.77);
      z-index: 2;
    }

    .ellipse-3 {
      position: absolute;
      background-color: #D9D9D9;
      width: var(--ellipse-2-width);
      height: 751px;
      border-radius: 100%;
      box-shadow: 0px -10px 25px 12px rgba(213,198,255,1);
      z-index: 3;
    }

    .ellipse-4 {
      position: absolute;
      background-color: #D9D9D9;
      width: var(--ellipse-2-width);
      height: 751px;
      border-radius: 100%;
      box-shadow: 0px -100px 300px 50px rgba(158,123,252,0.4);
      filter: blur(3px);
      z-index: 3;
    }
  }
</style>