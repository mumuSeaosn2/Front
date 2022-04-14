<template>
    <div>
    <friend-recommand></friend-recommand>
    <friend-list></friend-list>
    <friend-request></friend-request>
    </div>
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

</style>
