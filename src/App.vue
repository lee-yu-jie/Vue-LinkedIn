<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lobster&family=Roboto+Condensed:ital,wght@1,300&family=Varela+Round&display=swap');

#app{
  font-family: 'Varela Round', sans-serif;
}
</style>
