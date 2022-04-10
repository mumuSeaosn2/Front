<template>
    <h2>친구추천</h2>
    <fieldset id="friendbox">
      <div>
      김지산
      <button  style="float: right;">친구 추가하기</button>
      </div>
    </fieldset>  



<div id="user-list" v-for="(user,key) in list" v-bind:key="key" style="display: inline;">{{user.nick}}
<button v-on:click="addfriend(user.id)" style="float: right;">친구 추가하기</button></div><br>


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
      axios.post(`http://localhost:3000/friend/recommend`, {
      })
      .then((data)=> {
          let list=data
      })
      .catch(error=> {
          console.log(error);
      });

  },
  methods: {
    addfriend(userId) {
                this.axios.post(`http://localhost:3000/friend/add`, {
                    id: userId,
                })
                .then(()=> {
                    console.log("채팅전송 성공");
                })
                .catch(error=> {
                    console.log(error);
                });
            }

  }
}
</script>


<style scoped>
#friendbox {
        width: 600px;
        height:500px;
    }
</style>