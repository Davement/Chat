<template>
  <div class="home">
    <header>
      <img src="@/assets/Logo.svg" alt="logo">
    </header>
    <main>
    </main>
    <Chats/>
  </div>
</template>

<script>
import Chats from "@/components/Chats.vue";

export default {
  name: "Home",
  components: {
    Chats,
  },
};
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>