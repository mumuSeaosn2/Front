<template>
    <h1>친구목록</h1>
    <fieldset id="friendbox">

        <div id="user-list" v-for="(friend,key) in friends" :key="key" style="display: inline;">{{friend.user_name}}
        <button style="float: right;" @click="createRoom(friend)">방 만들기</button>
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
      friendname:"",
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

  methods:{

    createRoom(friendname){
        console.log(friendname.id)
        this.$axios.post(`http://localhost:3000/room/create`,{id:friendname.id})
        .then(data=>{
          alert(friendname.user_name+"과의 방이"+data.data.id+"이름으로 성공적으로 생성되었습니다.")
        })
        .catch(err=>{console.log(err);alert("방 생성 오류")})
      },
      
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
#friendbox{
        width: 600px;
        height:500px;
}
</style>