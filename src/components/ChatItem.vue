<template>
  <div class="chatItem">
    <vs-avatar circle size="60" badge badge-color="success">
      <img :src="user.img" alt="" />
    </vs-avatar>
    <div>
      <h3>{{ user.name }}</h3>
      <p>{{ lastMessage.message }}</p>
    </div>
    <div>
      <p>{{ lastMessage.createdAt }}</p>
      <div>1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatItem',
  props: {
    user: Object,
    lastMessage: Object
  }
}
</script>

<style scoped>
.vs-avatar img {
  width: 110%;
}
</style>
