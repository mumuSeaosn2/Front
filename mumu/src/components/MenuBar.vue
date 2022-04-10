<template>
  <header>
    <div class="menuWrap">
        <ul class="menu">
            <li><a href="/chat">채팅</a></li>
            <li><a href="/login">로그인</a></li>
            <li><a href="/register">회원가입</a></li>
            <li><a href="/friend">친구목록</a></li>
            <li><a href="/room">채팅방</a></li>
            <li><a @click="logout">로그아웃</a></li>
        </ul>
    </div>
</header>
</template>

<script>
//import axios from 'axios'
export default {
    methods:{
        // logout(){
        //     axios.post("http://localhost:3000/auth/logout",{})
        //     .then(res=>{

        //     })
        // }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'SF_IceLemon';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_IceLemon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
a {
	font-family: 'SF_IceLemon';
}
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #db77c2}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}
a{text-decoration:none; color:#db7ccb;}
</style>