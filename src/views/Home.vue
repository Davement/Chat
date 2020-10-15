<template>
  <div class="home">
    <header>
      <img src="@/assets/Logo.svg" alt="logo">
    </header>
    <main>
    </main>
    <aside>
    </aside>
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
      user: { name: "Pieter Hendriks", img: require('@/assets/img/profile.png') },
    };
  },
};
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>