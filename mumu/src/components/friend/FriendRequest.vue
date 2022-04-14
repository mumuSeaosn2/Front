<template>
    <h2>친구요청 목록</h2>
    <fieldset id="friendbox">
      <div>
      김지산
      <button  style="float: right;">요청 수락</button>
      </div>
    </fieldset>  



<div id="user-list" v-for="(user,key) in list" v-bind:key="key" style="display: inline;">{{user.nick}}
<button v-on:click="addfriend(user.id)" style="float: right;">요청 수락</button></div><br>


</template>

<script>
import axios from 'axios';
export default {
  
  name: 'FriendRequest',
  created() {
  },
  data () {
    return {
        list:[],
    }
  },
  mounted(){
      axios.get(`http://localhost:3000/friend/request/list`, {
      })
      .then((data)=> {
          this.list=data
      })
      .catch(error=> {
          console.log(error);
      });

  },
  methods: {
    addfriend(userId) {
                this.axios.post(`http://localhost:3000/friend/request`, {
                    id: userId,
                })
                .then(()=> {
                    console.log("친구요청 보냄");
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