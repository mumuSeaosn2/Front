<template>
    <div>
    <h2>친구요청 목록</h2>
    <fieldset id="friendbox">
      <div id="user-list" v-for="(user,key) in list" v-bind:key="key" style="display: inline;">{{user.user_name}}
        <button v-on:click="requestfriend(user.id)" style="float: right;">요청 수락</button><br></div>
    </fieldset>  
    </div>





</template>

<script>
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
      this.$axios.get(`http://localhost:3000/friend/follower/list`, {
      })
      .then((data)=> {
          this.list=data.data
      })
      .catch(error=> {
          console.log(error);
      });

  },
  methods: {
    requestfriend(userId) {
                this.$axios.post(`http://localhost:3000/friend/add/${userId}`)
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