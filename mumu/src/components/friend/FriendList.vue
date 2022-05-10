<template>
    <h1>친구목록</h1>
    <fieldset id="friendbox">

        <div id="user-list" v-for="(friend,key) in friends" :key="key" style="display: inline;">{{friend.user_name}}
        <button style="float: right;">친구 삭제하기</button><br></div>

    </fieldset>
</template>

<script>
export default {
  name: 'FriendList',
  data () {

    return {
      id:"",
      friends:[],
    }

  },
  mounted(){

    this.$axios.get(`http://localhost:3000/friend/list`,{
    })
    .then(data=>{

      console.log(data)
      //this.friends=res.friends
      this.friends = data.data
      console.log(data.data)

    }).catch(error=>{
      console.log(error)
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
#friendbox{
        width: 600px;
        height:500px;
}
</style>