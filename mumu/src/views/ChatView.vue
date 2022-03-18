<template>
    <div class="page-container">
        
                <div class="md-toolbar-row">
                    <span class="md-title">My Chat App</span>
                </div>
            
            
                <fieldset>
                    <label>Message</label>
                    <textarea v-model="textarea" disabled v-auto-scroll-bottom></textarea>
                    <fieldset>
                        <legend>채팅 내용</legend>
                    </fieldset>    
                </fieldset>
                <fieldset>
                    <label>Your Message</label>
                    <input v-model="message"/>
                    <button class="md-primary md-raised" @click="sendMessage()">Submit</button>
                </fieldset>
            
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        created() {
            this.$socket.on('chat', (data)=> {
                console.log("받았음")
                this.textarea += data.message + "\n"
            })
        },
        data() {
            return {
                textarea: "",
                message: '',
            }
        },
        methods: {
            sendMessage () {
                this.$socket.emit('chat',{
                    message: this.message
                });
                this.textarea += this.message + "\n"
                this.message = ''
            }
        }
    }
</script>

<style>
    .textarea {
        height: 1000px;
    }
</style>