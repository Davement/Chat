<template>
  <div class="login">
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/Logo.png" alt="" />
      </div>
      <div class="content">
        <h1>Register</h1>
        <form @submit="submitForm">
          <vs-input
            block
            autofocus
            color="#8978e2"
            border
            type="name"
            v-model="name"
            placeholder="Name"
            style="margin: 1em"
          >
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            block
            autofocus
            color="#8978e2"
            border
            type="email"
            v-model="email"
            placeholder="Email"
            style="margin: 1em"
          >
            <template #icon>
              <i class="bx bx-envelope"></i>
            </template>
          </vs-input>
          <vs-input
            block
            color="#8978e2"
            border
            type="password"
            v-model="password"
            placeholder="Password"
            style="margin: 1em"
          >
            <template #icon>
              <i class="bx bx-lock-open-alt"></i>
            </template>
          </vs-input>
          <p class="error">{{ error }}</p>
          <vs-button block>REGISTER</vs-button>
          <p @click="redirect('/login')">Already a account?</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import testService from '../services/test';
import userService from "../services/userService";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    redirect(route) {
      this.$router.push(route);
    },
    async submitForm(event) {
      event.preventDefault();
      let request = await userService.addUser(
        this.user,
        this.email,
        this.password
      );
      this.$cookies.set("token", request.id);
      this.$router.push("/");
    },
  },
  computed: {},
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/loginLine.svg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 54em;
  height: 30em;
  display: flex;
  border-radius: 1em;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: white;
  border-bottom-left-radius: 1.1em;
}

.logo {
  width: 100%;
  background: linear-gradient(170deg, #8978e2, #be77e5);
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 35%;
}

.content {
  margin-top: 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8978e2;
}

.content form {
  margin-top: 3em;
  width: 17.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content form label {
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 1em;
}

.content form .vs-button {
  background-color: #8978e2;
  margin: 1em;
}

.content form .vs-button:hover {
  box-shadow: none;
}

.content form .error {
  color: red;
}

.content form input[type="submit"] {
  cursor: pointer;
  background-color: #8978e2;
  color: white;
  font-weight: bold;
  height: 2em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  border: none;
}

.content form p {
  cursor: pointer;
  font-size: 0.8em;
  margin: 0.3em;
}

.content form p span {
  font-weight: bold;
}
</style>