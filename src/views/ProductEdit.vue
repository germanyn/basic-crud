<template>
  <div class= "card">
    <form @submit.prevent="saveProduct" class="product-form">
      <h1 class="text-center"> {{ id ? '' : 'New  ' }} Product</h1>
      <div v-if="id && loading" class="text-center"> Loading... </div>
      <div v-else-if="error" class="text-center"> {{ error }} </div>
      <fieldset v-else :disabled="sending">
        <div class="d-column">
          <label for="username">
            Name
          </label>
          <input
            ref="name"
            id="name"
            type="text"
            v-model="product.name"
            required
          >
          <label for="username">
            Price
          </label>
          <input
            ref="price"
            id="price"
            type="number"
            step="0.01"
            v-model="product.price"
            required
          >
          <label for="image">
            Image
          </label>
          <div class="image-wrapper">
            <img
              :src="product.image || require('@/assets/no-image.png')"
              alt=""
            >
          </div>
          <div class="text-center">
            <input
              type="button"
              class="primary"
              id="image"
              @click.prevent="$refs['upload'].click()"
              value="Upload"
            >
          </div>
          <input
            ref="upload"
            type="file"
            style="display: none;"
            @change="upload"
          >
          <div class="d-row actions a-space-between">
            <button class="flat" @click="$router.push('/products')">
              Cancel
            </button>
            <button class="bg-green">
              Save
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
  props: {
    id: {
      default: null,
    }
  },
  data() {
    return {
      error: undefined,
      loading: true,
      uploading: false,
      sending: false,
      product: {
        name: undefined,
        image: undefined,
        price: undefined,
      }
    }
  },
  created() {
    if (this.id) this.fetchProduct()
    else this.loading = false
  },
  methods: {
    async fetchProduct() {
      try {
        this.product = await this.$store.dispatch('getProduct', this.id)
        this.$nextTick(()=>this.loading = false)
      } catch(error) {
        this.error = error.response.data || error.message
      }
    },
    readFileAsync: async (file) =>{
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async upload(event) {
      const [ file ] = event.target.files
      if (!file) return

      this.uploading = true
      try {
        const base64File = await this.readFileAsync(file)
        this.product.image = base64File
      } catch (error) {
        alert(error.message)
      } finally {
        this.uploading = false
      }
    },
    validate() {
      if (!this.product.name) {
        alert("Name required.")
        document.getElementById('name').focus()
        return false
      }

      if (!this.product.price) {
        alert("Price required.")
        document.getElementById('price').focus()
        return false
      }

      if (this.product.price <= 0) {
        alert("Price needs to be greater than 0.")
        document.getElementById('price').focus()
        return false
      }

      return true
    },
    async saveProduct() {

      if(!this.validate()) return

      this.sending = true
      try {
        const { id, product } = this
        id
          ? await this.$store.dispatch('updateProduct', { id, product })
          : await this.$store.dispatch('createProduct', product)
        this.$router.push('/products')
      } catch(error) {
        alert(error.message)
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style scoped>

.image-wrapper {
  flex: 1;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
  padding: 4px;
  box-shadow: none;
  border-radius: 4px;

  border: 2px inset;
  background-color: white;
  -webkit-appearance: none;
}

.image-wrapper > img {
  height: 100%;
  width: auto;
  display: block;
}

.product-form {
  max-width: 480px;
  margin: auto;
}

</style>