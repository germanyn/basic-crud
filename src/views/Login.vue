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
      >
      <label for="password" >
        Password
      </label>
      <input
        ref="password"
        id="password"
        type="password"
        v-model="credentials.password"
      >
      <button class="primary">Login</button>
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
    login() {
      this.sending = true
      try {
        const result = this.$store.dispatch('login')
        this.$router.push('/products')
      } catch(error) {
        alert(error)
      } finally {
        this.sending = false
      }
    }
  },
}
</script>