<script>
import { onMounted } from 'vue'
import HeaderComponent from '../components/header/HeaderComponent.vue'
import BodyComponent from '../components/body/BodyComponent.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    BodyComponent
  },
  setup() {
    onMounted(() => {
      document.title = 'BloomBoutique'
      let link = document.querySelector("link[rel~='icon']")
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = 'https://imgur.com/YfG6hPh.png'
    })
  }
}
</script>


<template>
  <header>


    <div class="wrapper">
      <HeaderComponent />
    </div>
  </header>

  <main>
    <BodyComponent />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
