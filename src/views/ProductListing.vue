<template>
  <div class="card">
    <div class="d-column flex p-relative">
      <h1 class="text-center">Products Catalog</h1>
      <button class="ml-auto" @click="$store.dispatch('logout')">Logout 🔓</button>
      <div class="d-row a-center j-center">
        <div>
          <input
            id="search"
            type="search"
            v-model="search"
            placeholder="Search..."
          />
        </div>
        <button
          class="bg-green"
          id="search"
          @click="() => $router.push('/products/new')"
        >
          NEW
        </button>
      </div>
      <div class="listing text-center">
        <div v-if="loading">
          <i>Loading...</i>
        </div>
        <div v-else-if="!products.length">
          <i>No product yet...</i>
        </div>
        <div v-else-if="!fileteredProducts.length">
          <i>No ocurrences for "{{ search }}"...</i>
        </div>
        <div v-else class="product-grid">
          <div class="grid-header j-center">
            <div class="">📷</div>
          </div>
          <div class="grid-header">
            <div class="price-cell">Price</div>
          </div>
          <div class="grid-header">
            <div>Name</div>
          </div>
          <div class="grid-header">
            <div class="actions-cell m-auto">Actions</div>
          </div>
          <template v-for="(product, index) in fileteredProducts">
            <div :key="`image-${product.id}`" class="j-center">
              <img
                :src="product.image || require('@/assets/no-image.png')"
                alt=""
                class="product-image cursor-pointer"
                @click="openImage(product.image)"
              />
            </div>
            <div :key="`price-${product.id}`" class="a-space-between">
              <div>U$&nbsp;</div>
              <div class="price-cell">{{ formatMonetary(product.price) }}</div>
            </div>
            <div :key="`name-${product.id}`" class="overflow-ellipsis">
              {{ product.name }}
            </div>
            <div :key="`actions-${product.id}`" class="actions-cell">
              <div class="actions-row">
                <button
                  class="small px-0"
                  @click="$router.push(`/products/${product.id}`)"
                > ✏️ </button>
                <button
                  class="small px-0"
                  @click="deleteProduct(product.id)"
                > ❌ </button>
                <button
                  class="small px-0"
                  @click="toggleUp(index)"
                > ⬆️ </button>
                <button
                  class="small px-0"
                  @click="toggleDown(index)"
                > ⬇️ </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="javascript">
import {
  includesSubstring,
  formatMonetary,
} from '@/utils/index'

export default {
  data() {
    return { 
      loading: false,
      sending: false,
      search: '',
      products: [],
    }
  },
  created() {
    this.fectchProducts()
  },
  methods: {
    formatMonetary,
    async fectchProducts() {
      this.loading = true
      try {
        this.products = await this.$store.dispatch('getProducts')
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
    async deleteProduct(id) {
      const confirm = window.confirm("Remove this product? (it's irreversible)")
      if (!confirm) return
      this.sending = true
      try {
        await this.$store.dispatch('deleteProduct', id)
        const index = this.products.findIndex(product => product.id === id)
        if (!~-1) this.products.splice(index, 1)
      } catch (error) {
        alert(error.response.data)
      } finally {
        this.sending = false
      }
    },
    toggleUp(index) {
      if (index <= 0) return
      this.toggleRows(index - 1, index)
    },
    toggleDown(index) {
      if (index == this.fileteredProducts.length - 1) return
      this.toggleRows(index, index + 1)
    },
    async toggleRows(indexA, indexB) {
      const { fileteredProducts } = this;
      const [ productA, productB ] = [
        fileteredProducts[indexA],
        fileteredProducts[indexB],
      ]
      ;[productA.sequence, productB.sequence] = [productB.sequence, productA.sequence ]
      Promise.all([
        this.$store.dispatch('updateProduct', {
          id: productA.id,
          product: productA,
        }),
        this.$store.dispatch('updateProduct', {
          id: productB.id,
          product: productB,
        }),
      ])
    },
    openImage(url) {
      const image = new Image();
      image.src = url;

      const w = window.open("");
      w.document.write(image.outerHTML);
      window.open(image)
    },
  },
  computed: {
    fileteredProducts() {
      return this.products
        .filter(({ name }) => includesSubstring(name, this.search))
        .sort((productA, productB) => productA.sequence - productB.sequence)
    },
  },
}
</script>

<style scoped>
#search {
  margin-left: 2px;
}

.listing {
  margin-top: 12px;
}

.product-grid {
  display: grid;
  grid-template-columns: 30px auto 1fr auto;
  align-content: space-around;
}

.product-grid > * {
  border-right: 1px solid rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  align-items: center;
  display: flex;
}

.product-grid > *:nth-child(4n + 1) {
  border-left: none;
}
.product-grid > *:nth-child(4n + 4) {
  border-right: none;
}
.product-grid > *:nth-child(-n + 4) {
  border-top: none;
}

.product-grid > *:nth-last-child(-n + 4) {
  border-bottom: none;
}

.product-grid > * {
  padding: 2px 4px;
}

.grid-header {
  font-weight: bold;
}

.actions-cell {
  text-align: center;
  overflow: hidden;
}

.actions-row {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
}

.actions-row > button {
  margin-top: 0;
}

.actions-row > button + button {
  margin-left: 8px;
}

.product-image {
  height: auto;
  width: 100%;
}

.price-cell {
  margin-left: auto;
}

</style>
