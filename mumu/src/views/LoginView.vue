<template>
<div class="loginpanel">
  <div class = "login">
  <h1>MUMU</h1>
  <div class="txt">
    <input id="user" type="email" placeholder="Email" v-model="email"/>
    <label for="user" class="entypo-user"></label>
  </div>
  <div class="txt">
    <input id="pwd" type="password" placeholder="Password" v-model="password"/>
    <label for="pwd" class="entypo-lock"></label>
  </div>
  <div class="buttons">
    <input type="button" @click="onSubmit" value="Login" />
    <span>
      <router-link to='/register' class="entypo-user-add register">Register</router-link>
    </span>
  </div>
  
  <div class="hr">
    <div></div>
    <div>OR</div>
    <div></div>
  </div>
  
  <div class="social">
    <a href="javascript:void(0)" class="facebook"></a>
    <a href="javascript:void(0)" class="twitter"></a>
    <a href="javascript:void(0)" class="googleplus"></a>
  </div>
  </div>
</div>

<span class="resp-info"></span>
</template>

<script>
// @ is an alias to /src
export default{
  name: 'LoginView',
  data(){
    return{
      email:'',
      password:'',
    };
  },
  methods:{
    onSubmit(){
      this.$axios.post("http://localhost:3000/auth/login",{email:this.email,password:this.password})
        .then((res)=>{
          if(res.data){
            this.$store.commit("setUser",res.data);
            this.$router.push({name:"room"});
            console.log(res)
          }
        })
        .catch((err)=>{
          if (err){
            console.error(err);
          }
        });
    }
  }
}
</script>

<style lang="less">

</style>
