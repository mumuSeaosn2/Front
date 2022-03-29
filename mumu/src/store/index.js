/* eslint-disable */
import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    email : "",
    password : "",
    auth_info:{
      email : "wooin@naver.com",
      password: "1111"
    },
    isLogin : false,
  },

  getters: {
  },

  mutations: {
    showconsole(state){
      console.log(state.email, state.password);
    },

    login_good(state){
      if(state.auth_info.email != state.email){
        alert("fuck you!");
      }
      else{
        if(state.auth_info.password != state.password){
          alert("fuck you!");
        }
        else{
          alert("login 완료!");
          state.isLogin = true;
          router.push({name:"home"});
        }
      }
    },

  },

  actions: {
    login_click({state,commit},login_obj){
      state.email = login_obj.email;
      state.password = login_obj.password;
      commit("login_good");
    }
  },

  modules: {
  }
})
