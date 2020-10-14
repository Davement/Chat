<template>
  <div class="chatItem">
    <img :src="user.img" alt="logo" />
    <div>
        <h3>{{user.name}}</h3>
        <p>{{lastMessage.message}}</p>
    </div>
    <div>
        <p>{{lastMessage.createdAt}}</p>
        <div>1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatItem",
  props: {
    user: Object,
    lastMessage: Object,
  },
};
</script>

<style scoped>
</style>
