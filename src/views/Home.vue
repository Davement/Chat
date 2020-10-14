<template>
  <div class="home">
    <ChatItem v-bind:lastMessage="lastMessage" v-bind:user="user" />
  </div>
</template>

<script>
import ChatItem from "@/components/ChatItem.vue";

export default {
  name: "Home",
  components: {
    ChatItem,
  },
  data() {
    return {
      lastMessage: { message: "Hallo ik ben dik", createdAt: new Date() },
      user: { name: "Pieter Hendriks", img: require('@/assets/Logo.png') },
    };
  },
};
</script>

<style scoped>

*{
  background-color: lightblue;
}
</style>