<template>
    <div class="page-container">
                <fieldset id="chatbox">        
                        <div id="chat-list" v-for="(chat,key) in chats" v-bind:key="key">
                            <div class="mine" v-if="chat.UserId == username">
                                <div>{{user.nick}}</div>
                                <div>{{chat.message}}</div>
                            </div>
                            <div class="other" v-else>
                                <div>{{chat.UserId}}</div>
                                <div>{{chat.message}}</div>
                                
                            </div>
                        </div>
                </fieldset>
                <fieldset>
                    <input v-model="message"/>
                    <button @click="sendMessage()">전송</button>
                </fieldset>
            
    </div>
</template>


<script>
    import axios from 'axios';

    let who=1

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
        data() {
            return {
                textarea: "",
                message: '',
                id:1,
                who:1,
            }
        },
        methods: {
            sendMessage () {
                // this.$socket.emit('chat',{
                //     message: this.message
                // });
                // this.textarea += this.message + "\n"
                // this.message = ''

                const div = document.createElement('div');
                if (who==1) {
                    div.classList.add('mine');
                } else {
                    div.classList.add('other');
                }
                const name = document.createElement('div');
                if (who==1) {
                    name.textContent = '나';
                } else {
                    name.textContent = '너';
                }
                div.appendChild(name);

                const chat = document.createElement('div');
                chat.textContent = this.message;
                div.appendChild(chat);
                
                document.querySelector('#chat-list').appendChild(div);

                if(who==1){
                    who=0
                }
                else{
                    who=1
                }

            }
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