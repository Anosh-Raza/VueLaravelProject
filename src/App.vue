<template>
    <Header/>
    <Footer/>
</template>

<script>
import Header from './components/MainHeader.vue'
import Footer from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: #f1f1f1;
}
</style>
