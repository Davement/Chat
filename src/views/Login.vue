<template>
  <div class="login">
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/Logo.png" alt="" />
      </div>
      <div class="content">
        <h1>Login</h1>
        <form @submit="submitForm">
           <vs-input
            color="#7d33ff"
            border
            type="email"
            v-model="email"
            placeholder="Email"
          >
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            color="#7d33ff"
            border
            type="password"
            v-model="password"
            placeholder="Password"
          >
            <template #icon>
              <i class="bx bx-lock-open-alt"></i>
            </template>
          </vs-input>
          <p class="error">{{ error }}</p>
          <input type="submit" value="LOGIN" />
          <p>Forgot your password?</p>
          <p>New to <span>CHAT</span>?</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import testService from '../services/test';
import userService from "../services/userService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      let request = await userService.auth(this.email, this.password);
      if (request.token) {
        this.$cookies.set("token", request.token);
        this.$router.push("/");
      } else {
        this.error = "Wrong email or password!";
      }
    },
  },
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
  margin-top: 4em;
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

.content form input {
  width: 100%;
  border: none;
  border-bottom: solid 1px #8978e2;
  font-size: 1.1em;
  color: #8978e2;
  margin-bottom: 1em;
}

.content form .error {
  color: red;
}

.content form input:focus {
  border-bottom: solid 1px #8978e2;
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
  font-size: 0.9em;
  margin: 0.3em;
}

.content form p span {
  font-weight: bold;
}
</style>