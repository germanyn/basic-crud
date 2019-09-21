<template>
  <div class= "card">
    <form @submit.prevent="saveProduct" class="product-form">
      <h1 class="text-center"> {{ id ? '' : 'New  ' }} Product</h1>
      <fieldset :disabled="sending">
        <div class="d-column">
          <label for="username">
            Name
          </label>
          <input
            ref="name"
            id="name"
            type="text"
            v-model="product.name"
          >
          <label for="username">
            Price
          </label>
          <input
            ref="price"
            id="price"
            type="number"
            step="0.1"
            v-model="product.price"
          >
          <label for="image">
            Image
          </label>
          <div class="image-wrapper">
            <img
              :src="product.image ||require('@/assets/no-image.png')"
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
            <button class="flat" @click="$router.go(-1)">
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
      uploading: false,
      sending: false,
      product: {
        name: undefined,
        image: undefined
      }
    }
  },
  methods: {
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
        console.log(base64File)
        this.product.image = base64File
      } catch (error) {
        alert(error)
      } finally {
        this.uploading = false
      }
    },
    saveProduct() {
      this.sending = true
      try {
        const response = this.id
          ? this.$store.dispatch('createProduct')
          : this.$store.dispatch('updateProduct')
      } catch(error) {
        alert(error)
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