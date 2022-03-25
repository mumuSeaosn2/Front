<template>
    <h1>친구추천</h1>
    <br><div><h3>친구 추천</h3></div><br>


<div id="user-list" v-for="(user,key) in users" v-bind:key="key" style="display: inline;">{{user.nick}}</div>
<button  style="float: right;">친구 추가하기</button><br>

</template>

<script>
import axios from 'axios';

export default {
  

  name: 'FriendRecommand',
  created() {


  },
  data () {
    return {
    }
  },
  mounted(){
      axios.post(`http://localhost:3000/user/list`, {
      })
      .then(()=> {
          console.log("채팅전송 성공");
      })
      .catch(error=> {
          console.log(error);
      });
  }
}



</script>


<style scoped>
</style>