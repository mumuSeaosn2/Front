<template>
<html>

<body>
  
  <h1>{{user}}'s chat room</h1>
  <p></p>
  
<nav class="navbar" role='navigation'>
    
  <ul class="menu no-js">
    <li class="menu-item"><a href="#" class="active" @click="addroom">HOME</a></li>
    <li class="menu-item"><a href="#">Sub Menu</a>
      <ul class="sub-menu">
        <li class="menu-item"><a href="#">Menu Item</a></li>
        <li class="menu-item"><a href="#">Menu Item</a></li>
        <li class="menu-item">
            <a href="#">Menu Item</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="#">Menu Item</a></li>
              <li class="menu-item"><a href="#"  v-for= "i in 5" :key=i>Menu Item</a></li>
              <li class="menu-item"><a href="#">Menu Item</a></li>
              <li class="menu-item"><a href="#">Menu Item</a></li>
              <li class="menu-item"><a href="#">Menu Item</a></li>
              <li class="menu-item"><a href="#">Menu Item</a>
                <ul class="sub-menu">
                  <li class="menu-item"><a href="#">Menu Item</a></li>
                  <li class="menu-item"><a href="#">Menu Item</a></li>
                  <li class="menu-item"><a href="#">Menu Item</a></li>
                  <li class="menu-item"><a href="#">Menu Item</a></li>
                </ul>  
              </li>
              <li class="menu-item"><a href="#">Menu Item</a></li>
              <li class="menu-item"><a href="#">Menu Item</a></li>
            </ul>
        </li>
        <li class="menu-item"><a href="#">Menu Item</a></li>
        <li class="menu-item"><a href="#">Menu Item</a></li>
        <li class="menu-item"><a href="#">Menu Item</a></li>
        <li class="menu-item"><a href="#">Menu Item</a></li>
      </ul>
    </li>

     <li class="menu-item"><a href="#">Profile</a> 
      <ul class="sub-menu">
        <li class="menu-item"><a href="#">내 정보</a></li>
        <li class="menu-item"><a href="#">로그아웃</a></li>
      </ul>  
    </li>

     <li class="menu-item"><a href="#">About</a></li>

  </ul>
</nav>

<div v-for="(room,key) in RoomList" :key=key>
  <div class="buttons" @click = "getinRoom(room)"><span>{{room}}의 방</span></div>
  <button @click="deleteRoom(room)">방 삭제하기</button>
</div>
<button @click="createRoom">방 만들기</button>

</body>

</html>
</template>

<script>
/* eslint-disable */
export default{
    data(){
        return{
          RoomList:[
          ],
        };
    },
    mounted() {
      this.$axios.get(`http://localhost:3000/room/list`,{})
      .then(data=>{
        for (var i = 0; i < data.data.length; i++) {
          this.RoomList.push(data.data[i].RoomUser.RoomListId)
        }
        console.log(this.RoomList)
      })
      .catch(error=>console.log(error))
    },
    computed:{
      user() {return this.$store.state.user;}
    },
    methods:{
      createRoom(){
        this.$axios.post(`http://localhost:3000/room/create`,{})
        .then(data=>{
          alert(data.data.id+"의 방이 성공적으로 생성되었습니다.")
        })
        .catch(err=>{console.log(err);alert("방 생성 오류")})
      },
      deleteRoom(roomid){
        this.$axios.delete(`http://localhost:3000/room/delete/`+roomid,{})
        .then(res=>{
          alert(res.data.message)
        })
        .catch(err=>console.log(err))
      },
      getinRoom(roomid){
        this.$axios.get(`http://localhost:3000/room/getin/`+roomid,{})
        .then(data=>{console.log("good")})
        .catch(err=>{console.log(err)})
      }
    }
}
</script>
<style lang = "scss" scoped>
/* setup */
* {
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;
  transition:all 60ms ease;
}

/* variables */
$menuHeight      : 3rem;
$subHeight       : 2rem;
$subwidth        : 180px;
$subPadding      : 0.35rem 0.25rem 0.25rem;
$suboffset       : 0.35rem; // offset the top padding


@mixin cf() {
  *zoom: 1;
	&:before, &:after {
		content: " ";
		display: table;
	}
	&:after { 
	 clear: both;
	}
}

%blockRel {
  display:block;
  position: relative;
}

%inBlockRel {
  display:inline-block;
  position: relative;
}


/* 
Essential Styles 
- - - - - - - - - - - -
I like to keep the specificity low by using tags to make it easy to override the basic strucuture, if needed.  Adding an id to the root element would offer more isolation.

*/
div.buttons {
    display: flex;
    
    flex: 1;
    width: 100%;
        
    display: inline-block;
    vertical-align: middle;
    padding: 0 15px;
    line-height: 60px;
    text-align: center;
    margin: 10px 0;
    
    cursor: pointer;
    
    color: rgb(255, 255, 255);
    text-shadow: 2px 0.5px #000000;
    font-size: 1.2em;
    
    border: 0 none;
    border-radius: 4px;
    outline: none;
    
    background-color: #2ecc7199;
    
    box-shadow: 
      0px 2px #27ae60,
      inset 0 0 #27ae60;
    
    &:hover, &:focus {
      background-color: darken(#2ecc71, 5%);
    }
    
    &:active {
      box-shadow: 
        0 0 darken(#27ae60, 5%),
        inset 0 1px darken(#27ae60, 5%);
      transform: translateY(2px);
    }
}

.menu {
  position:relative;
  list-style:none;
  float:left;
  padding:0;
  margin:0;
  
  
  li {
    @extend %inBlockRel;
    float: left;
  }
  a {
      @extend %inBlockRel;
      height:$menuHeight;
      line-height:$menuHeight;
      width:100%;
    }
  
  ul { // drop down menu
    display: none;
    position: absolute;
    top: 100%;
    left : 0px;
    width: $subwidth;
    min-width:$subwidth;
    padding: 0;
    margin:0;
    
    ul { // nested drops
      top: (0 - $suboffset); 
      left: 100%;
    }
    
    li {
      @extend %blockRel;
      float: left;
      width:100%;
    }
    
    a {
      @extend %blockRel;
      height: $subHeight;
      line-height: $subHeight;
    }
    
  }
  
  li:hover > .sub-menu {
      display: block;
    }
  
  @include cf();
} 


$navbg : #D2D7D3;
$topcolor : #6C7A89;
$topactivecolor : #F2784B;
$subbg : #34495e;
$sublink : #F2F1EF;
$sublinkactivebg : #2C3E50;
$nestedbg : #2C3E50;
$currentcolor : $topcolor;
  
/* THEME  */
.navbar {
  background: $navbg;
  @include cf();
}

.menu {
  width: 100%;
  
  li {
    border-right:1px dotted #ECECEC;
    width: 25%;
    &:last-child {
      border-right:none;
    }
  }
  
  a {
    color :$topcolor;
    font-size :0.75rem;
    text-decoration :none;
    text-transform :uppercase;
    padding: 0 0.75rem; 
    
    &:hover,
    &.active {
      color : $topactivecolor;
      /* border-bottom: 1px solid; */
    }
  }
  
    %arrow {
      line-height:1em; 
      font-size:6px; 
      padding-left:6px; 
      position:relative;
      top:-2px;
    }
  
  /* Change this in order to change the Dropdown symbol */
  .sub-menu li > a:after { 
    @extend %arrow;
    content: ' \25B6'; 
    
  } 
  
  li > a:after { 
    @extend %arrow;
    content: ' \25BC'; 

  } 
  li > a:only-child:after,
  .sub-menu li > a:only-child:after { 
    content: ''; 
  }
  
   // Drop Down Menus
  .sub-menu {
    background:$subbg;
    padding :$subPadding;
    li {
      border-right:none;
    }
    a {
      color:$sublink;
      /* padding: 0.35rem ($menuHeight / 2); */
      &:hover {
        background: $sublinkactivebg;
        border-bottom: none;
      }
    }
    &:before {
      content : '';
      border-bottom: 14px solid $subbg;
      border-right:14px solid transparent;
      position : absolute;
      top: -14px;
      left: 0;
    }

    // Nested Drop Down Menus
    .sub-menu {
        background : $nestedbg;
        &:before {
          content : ' ';
          border-right: 14px solid $nestedbg;
          border-bottom:14px solid transparent;
          position : absolute;
          top: 0;
          left: -14px;  
        }

      li a:hover,
      li a:active {
          background: $subbg;
        }
    }

  } // end sub-menus
  
  .active,
  .current_page_item a,
  .current-menu-item a {
    color : $currentcolor;
  }
  
}




/* DEMO PAGE STYLE */
html{
    padding:5px;
    background:#ffffff;
}

h1 {
    padding: 0px;
    color : #2c3e50;
    text-align: center;
}

p{
    font-size:10px;
    font-family:serif;
    font-style:italic;
    color: #b5bfc1;
    text-align:center;
    width:360px;
    padding: 5px;
}
</style>