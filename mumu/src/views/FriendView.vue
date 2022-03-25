<template>
    <div>
    <friend-recommand></friend-recommand>
    <friend-list></friend-list>
    </div>
</template>

<script>
import FriendRecommand from '../components/Chat/FriendRecommand.vue'
import FriendList from '../components/Chat/FriendList.vue'


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
