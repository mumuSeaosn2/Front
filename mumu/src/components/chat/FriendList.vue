<template>
    <h1>친구목록</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FriendList',
  data () {
    return {
      id:"",
      friends:[],
    }
  },
  mounted(){
    axios.get(`http://localhost:3000/user?id=${this.id}`,{
    })
    .then(()=>{
      console.log("good")
      //this.friends=res.friends
    }).catch(()=>{
      console.log(this.id)
      console.log("failed")
    })
  },
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