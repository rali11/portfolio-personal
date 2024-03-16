<template>
  <header :class="backgroundScroll">
    <Container tag="div">
      <nav>
        <ul>
          <li 
            v-for="(item, index) in navList"
            :key="index"
          >
            <a 
              :href="item.href"
              :class="[item.intersecting ? 'intersecting' : '']"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
</template>

<script setup lang="ts">

  const { y } = useScrollWindow()

  interface Links {
    title: string
    href: string
    intersecting?: boolean
    id?: string
  }

  const navList: Links[] = reactive([
    {
      title: 'Experiencia',
      href: '#experience',
      intersecting: false,
      id:'experience'
    },
    {
      title: 'Proyectos',
      href: '#projects',
      intersecting: false,
      id: 'projects'
    },
    {
      title: 'Sobre mi',
      href: '#aboutMe',
      intersecting: false,
      id: 'aboutMe'
    },
    {
      title: 'Contacto',
      href: 'mailto:rauleduardo.correa21@gmail.com'
    }
  ])

  onMounted(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    } 

    function callback(entries: any[]){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          navList.forEach(itemNav => {
            if(itemNav.id === entry.target.id){
              itemNav.intersecting = true
            } else {
              itemNav.intersecting = false
            }
          })
        } 
      })
    }

    const observer = new IntersectionObserver(callback, options);

    navList.forEach(navItem => {
      if (navItem.id){
        observer.observe(document.querySelector(`#${navItem.id}`) as Element)
      }
    })
  })

  const backgroundScroll = computed(() => y.value > 10 ? 'background-scroll':'')

</script>

<style lang="scss" scoped>

  .background-scroll {
    background-color: $header-scroll-bg;
    z-index: 1;
    transition: background-color .2s;
  }

  header {
    position: sticky;
    top: 0;
    height: 69px;
    display: flex;
    align-items: center;
    border-color: $header-border-color;
    border-width: 0 0 1px 0;
    border-style: solid;
    transition: background-color .2s;
    
    nav {
      display:flex;
      justify-content: center;
      font-size: $fs-header-text;
      font-weight: bold;
  
      ul {
        display: flex;
        gap: 35px;
        margin: 0;
        color: $text-primary;
        padding: 0;
  
        li {
          list-style: none;
        }

        a {
          color: $text-primary;
          text-decoration: none;
        }

        .intersecting {
          border-width: 0 0 2px 0;
          border-style: solid;
          border-color: $header-intersecting-text;
        }
      }
    }
  }
</style>