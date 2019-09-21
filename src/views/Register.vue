<template>
  <div class="card register">
    <form @submit.prevent="register">
      <h1 class="text-center">Register</h1>
      <label for="username">
        Username
      </label>
      <input
        ref="username"
        id="username"
        type="text"
        v-model="registry.username"
      >
      <label for="password" >
        Password
      </label>
      <input
        ref="password"
        id="password"
        type="password"
        v-model="registry.password"
      >
      <label for="password" >
        Confirm Password
      </label>
      <input
        ref="password"
        id="password"
        type="password"
        v-model="confirmPassword"
      >
      <button class="primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registry: {
        username: '',
        password: '',
      },
      confirmPassword: '',
    }
  },
  methods: {
    register() {
      this.sending = true
      try {
        const result = this.$store.dispatch('register', this.registry)
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