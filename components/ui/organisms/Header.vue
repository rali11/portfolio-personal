<template>
  <header>
    <Container tag="div">
      <nav>
        <ul>
          <li 
            v-for="(item, index) in navList"
            :key="index"
          >
            <a :href="item.href">
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


</script>

<style lang="scss" scoped>

  header {
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);

    nav {
      display:flex;
      justify-content: center;
      font-size: $fs-header-text;
      font-weight: bold;
      border-image: linear-gradient(90deg, rgba(83,84,104,0) 0%, rgba(213,198,255,0.2) 23%, rgba(213,198,255,0.4) 50%, rgba(213,198,255,0.2) 76%, rgba(83,84,104,0) 100%) 1;
      border-width: 0 0 1px 0;
      border-style: solid;
      transition: background-color .2s;
      padding:33px 0px;
  
      ul {
        display: flex;
        gap: 35px;
        margin: 0;
        color: $text-primary;
        padding: 0;
        padding: 15px 30px;
        border-radius: 30px;
        border-style: solid;
        border-width: 1px;
        border-color: $header-border-color;
        background-color: rgba($color: #000000, $alpha: .2);
  
        li {
          list-style: none;
        }

        a {
          color: $text-primary;
          text-decoration: none;
        }
      }
    }
  }
</style>