<template>
  <div class="home">
    <header>
      <img src="@/assets/Logo.svg" alt="logo" />
    </header>
    <main></main>
    <Chats />
    <main></main>
    <aside></aside>
    <ChatItem v-bind:lastMessage="lastMessage" v-bind:user="user" />
    <p>{{ userData.id }}</p>
  </div>
</template>

<script>
import Chats from '@/components/Chats.vue'
import ChatItem from '@/components/ChatItem.vue'
import userService from '../services/userService'

export default {
  name: 'Home',
  components: {
    Chats,
    ChatItem
  },
  data() {
    return {
      userData: {},
      lastMessage: { message: 'Hallo ik ben dik', createdAt: new Date() },
      user: {
        name: ' Hendriks',
        img: require('@/assets/img/profile.png')
      }
    }
  },
  methods: {
    async getUserData() {
      let token = this.$cookies.get('token')
      this.userData = await userService.getUserById(token)
    }
  },
  beforeMount() {
    this.getUserData()
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
