<template>
    <div>
    <friend-recommand></friend-recommand>
    <friend-list></friend-list>
    </div>
</template>

<script>
import FriendRecommand from '../components/friend/FriendRecommend.vue'
import FriendList from '../components/friend/FriendList.vue'


export default {
  name: 'FriendView',
  components: {
    FriendRecommand,
    FriendList

  }
}
</script>

<style>

</style>
