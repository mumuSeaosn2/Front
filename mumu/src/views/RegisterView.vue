<template>
  <div class="loginpanel">
    <div class = "reg">
    <h1> Sign Up </h1>
    <div class="txt">
      <h3>First Name</h3>
      <input id="firstname" v-model="first" type="text" placeholder="First Name" />
    </div>
    <div class="txt">
      <h3>Last Name</h3>
      <input id="lastname" v-model="last" type="text" placeholder="Last Name" />
    </div>
    <div class="txt">
      <h3>Email</h3>
      <input id="email" v-model="email" type="text" placeholder="Email" />
    </div>
    <div class="txt">
      <h3>Password</h3>
      <input id="password" v-model="password" type="password" placeholder="Password" />
    </div>
    <div class="txt">
      <h3>Confirm Password</h3>
      <input id="confirmpassword"  type="password" placeholder="Confirm Password" />
    </div>
    <div class="buttons">
      <input type="button" @click="Register" value="Register"/>
    </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
// @ is an alias to /src
export default{
  name: 'RegisterView',
  data(){
    return{
      first:"",
      last:"",
      email:"",
      password:"",
    };
  },
  components: {
  },
  methods:{
    Register(){
      const u = this.first + this.last;
      const e = this.email;
      const p = this.password;
      axios.post("http://localhost:3000/auth/register",{user_name:u,email:e,password:p})
      .then(res=>{
        alert("등록 완료, 재로그인 부탁드립니다")
      })
      .catch(err=>{
        if(err){
          console.error(err);
        }
      });
    }
  }
}
</script>