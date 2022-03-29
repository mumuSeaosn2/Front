<template>
  <router-view/>
</template>

<script>
/* eslint-disable */
import MainLogo from './components/MainLogo.vue'
import MenuBar from './components/MenuBar.vue'
export default {
  name: 'App',
  components: {
    MainLogo,
    MenuBar,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
