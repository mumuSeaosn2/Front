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
    <input type="button" @click="login_click({email,password})" value="Login" />
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
import {mapActions} from "vuex"
// @ is an alias to /src
export default{
  name: 'LoginView',
  components: {
  },
  data(){
    return{
    };
  },
  methods:{
    ...mapActions(["login_click"]),
  }
}
</script>

<style lang="less">

</style>
