<template>
  <div class="chats">
    <ChatItem v-bind:lastMessage="lastMessage" v-bind:user="user" />
  </div>
</template>

<script>
import ChatItem from "@/components/ChatItem.vue";

export default {
  name: "Chats",
  components: {
    ChatItem
  },
  data() {
    return {
      lastMessage: { message: "Hallo ik ben dik", createdAt: new Date() },
      user: {
        name: "Pieter Hendriks",
        img: require("@/assets/img/profile.png")
      }
    };
  }
};
</script>

<style scoped>
.vs-avatar img {
  width: 110%;
}
</style>
