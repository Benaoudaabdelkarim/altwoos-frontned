
<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
  export default {
    components: {
      NavBar,Footer
    },
    mounted () {
      if(sessionStorage.getItem("Lang"))
        this.$store.dispatch("changeTranslation", sessionStorage.getItem("Lang"))
      else
        this.$store.dispatch("changeTranslation", "en")
    },
  }
</script>

