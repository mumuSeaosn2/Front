<template>
    <h1>{{RoomId}}'s chat room</h1>
    <div class="page-container">
                <fieldset id="chatbox">        
                        <div v-for="(chat,key) in chats" v-bind:key="key">
                            <div class="mine" v-if="chat.UserId == user">
                                
                                <div>{{chat.user_name}}</div> 
                                <div>{{chat.message}}</div>
                            </div>
                            <div class="other" v-else>
                                <div>{{user}}</div>
                                <div>{{chat.user_name}}</div> 
                                <div>{{chat.message}}</div>
                            </div>
                        </div>
                </fieldset>
                <fieldset>
                    <form @submit="formSubmit">
                        <input type="text" id="chat" v-model="message">
                        <button class="chat_submit" type="submit">전송</button>
                    </form>
                    
                </fieldset>
            
    </div>
</template>


<script>
/* eslint-disable */
import io from 'socket.io-client'
    export default {
        name: 'HelloWorld',
        created() {

        },
        data() {
            return {
                message:"",
                chats:[],
                user:this.$store.state.user,
                RoomId:this.$store.state.room,
            }
        },
        mounted(){
            console.log("유저",this.user)
            console.log("방",this.roomid)
            const socket = io.connect('http://localhost:3000/chat',{
                cors:{origin:'*'}
            })

            socket.on('chat',  (data) =>{

            console.log("채팅받음")

            const div = document.createElement('div');
            if (data.chat.UserId == '{{user.id}}') {
                div.classList.add('mine');
            } else {
                div.classList.add('other');
            }
            const name = document.createElement('div');
            name.textContent = data.userinfo.nick;
            div.appendChild(name);
            const chat = document.createElement('div');
            chat.textContent = data.chat.message;
            div.appendChild(chat);
            
            document.querySelector('#chat-list').appendChild(div);
            });


            this.$axios.post(`http://localhost:3000/chat/room`, {
                    RoomId:"66bd3192-b3db-4f3a-aa69-068519d633a1",
                    // RoomId: this.RoomId,
                })
                .then((data)=> {
                    
                    this.chats=data.data.chats;
                    console.log(data.data.chats)
                })
                .catch(error=> {
                    console.log(error);
                });


            // //기존 채팅의 사용자 id로 닉네임과 프로필사진으로 가져오는 코드
            // const nicks=document.querySelectorAll("div.other_nick");
            // nicks.forEach(function(nick) {
            // const userId=nick.textContent
            // this.$axios.post(`/user/${userId}/info`)
            //     .then((res) => {
            //         nick.textContent=(res.data.userinfo.nick)
            //         nick.style.display = 'block';
            //         profiles=document.querySelectorAll("img.other_profile");
            //         profiles.forEach(function(profile){
            //         profile.src = res.data.userinfo.profile_img;
            //         });
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //     });
            
            // });
        },
        computed:{
            roomID() {return this.$store.state.room},
        },
        methods: {
             formSubmit(e) {
                e.preventDefault();             
                this.$axios.post(`http://localhost:3000/chat/room/chat`, {
                    RoomId: "66bd3192-b3db-4f3a-aa69-068519d633a1",
                    // RoomId: this.RoomId,
                    chat: this.message,
                })
                .then(()=> {
                    console.log(this.message);
                })
                .catch(error=> {
                    console.log(error);
                });
            }
        },
    }
</script>

<style>
    button{
        background-color:rgb(241, 199, 239);
    }
    .page-container{
        width:1000px;
    }
    #chatbox {
        width: 1000px;
        height:500px;
        background-color:rgb(241, 199, 239);
        overflow: auto;
    }
    #chat-list { height: 500px;  padding: 5px; }
    .mine { text-align: right; }
    .other { text-align: left; }
    .mine div:first-child, .other div:first-child { font-size: 12px; }
    .mine div:last-child, .other div:last-child {
    display: inline-block;
    border: 1px solid rgb(197, 46, 185);
    background-color:white;
    border-radius: 5px;
    padding: 2px 5px;
    max-width: 300px;
    }
</style>