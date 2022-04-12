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
        list:[],
    }
  },
  mounted(){
      axios.post(`http://localhost:3000/friend/recommend`, {
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
                this.axios.post(`http://localhost:3000/friend/add`, {
                    id: userId,
                })
                .then(()=> {
                    console.log("친구추가 성공");
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