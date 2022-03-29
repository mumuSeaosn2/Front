<template>
    <div class="page-container">
                <fieldset id="chatbox">        
                        <!-- <textarea v-model="textarea" disabled v-auto-scroll-bottom></textarea> -->
                        <div id="chat-list">
                            <div class="mine" >   
                            </div>
                            <div class="other" >
                            </div>
                        </div>
                        <!-- <div id="chat-list" v-for="(chat,key) in chats" :key="key">
                            <div class="mine" v-if="chat.UserId == username">
                                <div>{{user.nick}}</div>
                                <div>{{chat.message}}</div>
                            </div>
                            <div class="other" v-else>
                                <div class="other_nick" value='{{chat.UserId}}' style="display: none;">{{chat.UserId}}</div>
                                <img class="other_profile" src=""  width="60">
                                <div>{{chat.message}}</div>
                                
                            </div>
                        </div> -->
                </fieldset>
                <div @keydown.enter="sendMessage" tabindex="0">
                    <fieldset>
                        <input v-model="message"/>
                        <input type="button" @click="sendMessage" value = "전송"/>
                    </fieldset>
                </div>
            
    </div>
</template>


<script>
import axios from 'axios'


export default {
    name: 'HelloWorld',
    created() {
        this.$socket.on('chat', (data)=> {
            console.log("받았음")
            this.textarea += data.message + "\n"
            
        },
        axios.get(`http://localhost:8001/chat/room/${this.id}`)
            .then(res=>console.log(res))
            .catch(error=>console.log(error))
        )
    },
    updated() {
    },
    data() {
        return {
            textarea: "",
            message: '',
            id:1,
            who:1,
            enterDown:false,
        }
    },
    methods: {
        printbitch(){
            console.log('bitch')
        },
        sendMessage () {
            // this.$socket.emit('chat',{
            //     message: this.message
            // });
            // this.textarea += this.message + "\n"
            // this.message = ''
            const div = document.createElement('div');
            if (this.who==1) {
                div.classList.add('mine');
            } else {
                div.classList.add('other');
            }
            const name = document.createElement('div');
            if (this.who==1) {
                name.textContent = '나';
            } else {
                name.textContent = '너';
            }

            div.appendChild(name);
            const chat = document.createElement('div');
            chat.textContent = this.message;
            div.appendChild(chat);
            
            document.querySelector('#chat-list').appendChild(div);
            if(this.who==1){
                this.who=0
            }
            else{
                this.who=1
            }
        },
    }
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
        background-color:rgb(192, 235, 243);
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