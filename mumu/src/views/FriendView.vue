<template>
    <div style="display:flex">
    <friend-recommand></friend-recommand>
    <friend-request></friend-request>
    </div>
    <friend-list></friend-list>
    
</template>

<script>
import FriendRecommand from '../components/friend/FriendRecommend.vue'
import FriendList from '../components/friend/FriendList.vue'
import FriendRequest from '../components/friend/FriendRequest.vue'

export default {
  name: 'FriendView',
  components: {
    FriendRecommand,
    FriendList,
    FriendRequest
  }
}
</script>

<style>
  .half { float: left; width: 50%; margin: 10px 0; }
  #user-list{
    line-height:170%
}
</style>
