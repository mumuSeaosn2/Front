<template>
  <div class="MainLogo">
    <h1>MUMU</h1>
  </div>
</template>

<script>
export default {
  name: 'MainLogo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
@font-face {
    font-family: 'HSGyeoulNoonkott20';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/HSGyeoulNoonkott20.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
h1 {
	font-family: 'HSGyeoulNoonkott20';
}
h1{color: #db7ccb;}
</style>