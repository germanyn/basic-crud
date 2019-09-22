<template>
  <div class="card register">
    <form @submit.prevent="register">
      <h1 class="text-center">Register</h1>
      <label for="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        v-model="registry.username"
        required
      >
      <label for="password" >
        Password
      </label>
      <input
        id="password"
        type="password"
        v-model="registry.password"
        required
      >
      <label for="confirm-password" >
        Confirm Password
      </label>
      <input
        id="confirm-password"
        type="password"
        v-model="confirmPassword"
        required
      >
      <button class="primary">Send</button>
      <div class="text-blue text-underline pt-2 text-center cursor-pointer"
        @click="() => $router.push('/login')"
      >
        Or sign in here
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registry: {
        username: undefined,
        password: undefined,
      },
      confirmPassword: undefined,
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

      if (!this.confirmPassword) {
        alert("Please confirm password.")
        document.getElementById('confirm-password').focus()
        return false
      }

      if (this.registry.password !== this.confirmPassword) {
        alert("Passwords doesn't match.")
        return false
      }

      return true
    },
    async register() {

      if(!this.validate()) return

      this.sending = true
      try {
        await this.$store.dispatch('register', this.registry)
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