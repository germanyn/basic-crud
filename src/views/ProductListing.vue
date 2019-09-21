<template>
  <div class="card">
    <div class="d-column flex">
      <h1 class="text-center">Products Catalog</h1>
      <div class="d-row a-center j-center">
        <div>
          <input
            id="search"
            type="search"
            v-model="search"
            placeholder="Search..."
          >
        </div>
        <button
          class="bg-green"
          id="search"
          @click="() => $router.push('/products/new')"
        >NEW</button>
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
          <div class="grid-header">
            <div> ID </div>
          </div>
          <div class="grid-header">
            <div> 📷 </div>
          </div>
          <div class="grid-header">
            <div class="price-cell"> Price </div>
          </div>
          <div class="grid-header">
            <div> Name </div>
          </div>
          <div class="grid-header">
            <div class="actions-cell m-auto"> Actions </div>
          </div>
          <template v-for="product in fileteredProducts">
            <div :key="`code-${product.id}`">
              {{ product.id }}
            </div>
            <div :key="`image-${product.id}`">
              <img
                :src="product.image"
                alt=""
                class="product-image"
              >
            </div>
            <div :key="`price-${product.id}`">
              <div class="price-cell">{{ product.price }}</div>
            </div>
            <div :key="`name-${product.id}`">
              {{ product.name }}
            </div>
            <div :key="`actions-${product.id}`" class="actions-cell">
              <div class="actions-row">
                <button class="small">✏️</button>
                <button class="small">❌</button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { includesSubstring } from '@/utils/index.js'

export default {
  data() {
    return { 
      loading: false,
      search: '',
      products: [
        {
          id: 1,
          name: 'Broom',
          image: 'https://cdn.leroymerlin.com.br/products/brilhus_vassoura_mult_c_cabo_1x15_89975431_97d3_300x300.jpg',
          price: 12.5,
        },
        {
          id: 2,
          name: 'Pencil',
          image: 'https://cdn.leroymerlin.com.br/products/brilhus_vassoura_mult_c_cabo_1x15_89975431_97d3_300x300.jpg',
          price: 2.8,
        },
      ],
    }
  },
  computed: {
    fileteredProducts() {
      return this.products
        .filter(({name}) => includesSubstring(name, this.search))
    } 
  }
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
  grid-template-columns: 32px 32px auto 1fr 85px;
  align-content: space-around;
}

.product-grid > * {
  border-right: 1px solid rgba(0,0,0,0.6);
  border-bottom: 1px solid rgba(0,0,0,0.6);
  align-items: center;
  display: flex;
}

.product-grid > *:nth-child(5n+1) {
  border-left: none;
}
.product-grid > *:nth-child(5n+5) {
  border-right: none;
}
.product-grid > *:nth-child(-n+5) {
  border-top: none;
}

.product-grid > *:nth-last-child(-n+5) {
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
}

.actions-row {
  text-align: center;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.actions-row > button {
  margin-top: 0;
}

.product-image {
   height: auto;
   width:100%;
}

.price-cell {
  margin-left: auto;
}

</style>