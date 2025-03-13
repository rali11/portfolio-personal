<template>
  <main>
    <HeroSection />
    <div class="main-card">
      <div class="sections">
        <ExperienceSection />
        <ProjectSection />
        <AboutMeSection />
      </div>
      <div class="linear-gradient" />
      <div class="border-glass" />
      <div class="blur-glass" />
    </div>
    <BackgroundBody />
  </main>
</template>
<style lang="scss" scoped>
  main {
    --container-width: #{$mobile};

    @media(min-width: $desktop){
      --container-width: #{$desktop};
    }
    padding-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap:115px;

    .main-card {
      position: relative;
      margin: 0;
      width: var(--container-width);

      .sections {
        width: 100%;
        padding-top: 87px;
        background: #010518;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        gap: 42px;
        z-index: 1;
      }

      .border-glass {
        position: absolute;
        top:-15px;
        left:-15px;
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        border-radius: 60px;
        border-color: rgba(213, 198, 255, .1);
        border-style: solid;
        border-width: 1px;
        z-index: -2;
      }

      .blur-glass {
        position: absolute;
        top:-15px;
        left:-15px;
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        filter: blur(1px) brightness(30%);
        border-radius: 60px;
        background-color: rgba(213, 198, 255, 0.1);
        z-index: -2;
      }

      .linear-gradient {
        position: absolute;
        top: 40%;
        left:-15px;
        width: calc(100% + 30px);
        height: calc(60% + 30px);
        background: rgb(38,20,87);
        background: linear-gradient(0deg, rgba(1,5,24,1) 90%, rgba(38,20,87,0) 96% );
        z-index: -1;
      }
    }
  }
</style>
