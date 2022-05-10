<template>
    <div class="page-container">
                <fieldset id="chatbox">        
                        <div id="chat-list" v-for="(chat,key) in chats" v-bind:key="key">
                            <div class="mine" v-if="chat.UserId == username">
                                <div>{{user.nick}}</div> <!--emit에서 데이터를 여러개 받도록 하자 emit('chat',{chat:chat,nick:nick})-->
                                <div>{{chat.message}}</div>
                            </div>
                            <div class="other" v-else>
                                <div class="other_nick" value='{{chat.UserId}}' style="display: none;">{{chat.UserId}}</div>
                                <img class="other_profile" src=""  width="60">
                                <div>{{chat.message}}</div>
                            </div>
                        </div>
                </fieldset>
                <fieldset>
                    <form @submit="formSubmit">
                        <input type="text" id="chat" name="chat">
                        <button class="chat_submit" type="submit">전송</button>
                    </form>
                </fieldset>
            
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        created() {
        },
        data() {
            return {
                id //?
            }
        },
        mounted(){
            this.$socket.on('chat',  (data) =>{
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
            //기존 채팅의 사용자 id로 닉네임과 프로필사진으로 가져오는 코드
            const nicks=document.querySelectorAll("div.other_nick");
            nicks.forEach(function(nick) {
            const userId=nick.textContent
            this.$axios.post(`/user/${userId}/info`)
                .then((res) => {
                    nick.textContent=(res.data.userinfo.nick)
                    nick.style.display = 'block';
                    profiles=document.querySelectorAll("img.other_profile");
                    profiles.forEach(function(profile){
                    profile.src = res.data.userinfo.profile_img;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
            
            });
        },
        methods: {
             formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.$axios.post(`http://localhost:3000/chat/room/${this.id}/chat`, {
                    chat: this.chat,
                })
                .then(()=> {
                    console.log("채팅전송 성공");
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
    }
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