<template>
  <div class="card login">
    <form @submit.prevent="login">
      <h1 class="text-center">Login</h1>
      <label for="username">
        Username
      </label>
      <input
        ref="username"
        id="username"
        type="text"
        v-model="credentials.username"
        required
      >
      <label for="password" >
        Password
      </label>
      <input
        ref="password"
        id="password"
        type="password"
        v-model="credentials.password"
        required
      >
      <button class="primary">Login</button>
      <div class="text-blue text-underline pt-2 text-center cursor-pointer"
        @click="() => $router.push('/register')"
      >
        Or sign up here
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sending: false,
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    validate() {
      if (!this.registry.username) {
        alert("Username required.")
        document.getElementById('username').focus()
        return false
      }

      if (!this.registry.password) {
        alert("Password required.")
        document.getElementById('password').focus()
        return false
      }
      return true
    },
    async login() {
      this.sending = true
      try {
        await this.$store.dispatch('login', this.credentials)
        this.$router.push('/products')
      } catch(error) {
        alert(error.response.data || error.message)
      } finally {
        this.sending = false
      }
    }
  },
}
</script>