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
      <p>
        {{ getSendTime() }}
      </p>
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
  },
  methods: {
    // getSendDay() {
    //   let months = [
    //     "january",
    //     "february",
    //     "march",
    //     "april",
    //     "may",
    //     "june",
    //     "july",
    //     "august",
    //     "september",
    //     "october",
    //     "november",
    //     "december",
    //   ];
    //   switch (this.lastMessage.createdAt.getDate()) {

    //     case new Date().getDate():
    //       return "Today";

    //     case new Date().getDate() - 1:
    //       return "Yesterday";

    //     default:
    //       return `${this.lastMessage.createdAt.getDate()} ${
    //         months[this.lastMessage.createdAt.getMonth() - 1]
    //       }`;
    //   }
    // },
    getSendTime() {
      let days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ]

      console.log(this.lastMessage.createdAt.getDate())
      switch (this.lastMessage.createdAt.getDate()) {
        case new Date().getDate():
          return `${this.lastMessage.createdAt.getHours()}:${this.lastMessage.createdAt.getMinutes()}`

        case new Date().getDate() - 1:
          return 'Yesterday'

        case new Date().getDate() - 2:
          return days[this.lastMessage.createdAt.getDay()]

        case new Date().getDate() - 3:
          return days[this.lastMessage.createdAt.getDay()]

        case new Date().getDate() - 4:
          console.log(this.lastMessage.createdAt.getDay())
          return days[this.lastMessage.createdAt.getDay()]

        case new Date().getDate() - 5:
          return days[this.lastMessage.createdAt.getDay()]

        case new Date().getDate() - 6:
          return days[this.lastMessage.createdAt.getDay()]

        default:
          if (
            this.lastMessage.createdAt.getFullYear() ===
            new Date().getFullYear()
          ) {
            return `${this.lastMessage.createdAt.getDate()}-${this.lastMessage.createdAt.getMonth()}`
          } else {
            return `${this.lastMessage.createdAt.getDate()}-${this.lastMessage.createdAt.getMonth()}-${this.lastMessage.createdAt.getFullYear()}`
          }
      }
    }
  }
}
</script>

<style scoped>
.vs-avatar img {
  width: 110%;
}
</style>
