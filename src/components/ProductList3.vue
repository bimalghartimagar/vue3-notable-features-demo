<template>
  <div>
    <div class="child">
      <h3>Vue3 Composition API</h3>
      <div>
        <div class="add-product">
          <h2>Add Product</h2>
          <div>Name: <input name="name" v-model="newProduct.name" /></div>
          <div>Price: <input name="name" v-model="newProduct.price" /></div>
          <button @click="addProductToList">Add</button>
        </div>
        <div class="search-product">
          <h2>Search Product</h2>
          <input
            name="name"
            v-model="filterText"
            placeholder="Start typing to search"
          />
        </div>
      </div>
      <div class="list-product">
        <h1>Product List</h1>
        <button @click="updateInventory()">Update Inventory</button>
        <ul>
          <li v-for="product in filteredProducts" :key="product">
            {{ product.name }}:{{ product.price }}
          </li>
        </ul>
      </div>
    </div>
    <teleport to="#count"
      ><child-component :count="filteredProducts.length"
    /></teleport>
  </div>
</template>

<script>
import useProducts from "@/composables/useProducts";
import useProductNameSearch from "@/composables/useProductNameSearch";
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },

  emits: ["update-inventory"],

  setup() {
    const newProduct = ref({ name: "", price: 0.0 });

    const { products, addProduct, emptyProducts } = useProducts();

    const { filterText, filteredProducts } = useProductNameSearch(products);

    return {
      newProduct,
      addProduct,
      filterText,
      filteredProducts,
      emptyProducts
    };
  },

  methods: {
    addProductToList: function() {
      // process product data before adding to list
      this.addProduct({ ...this.newProduct });
      this.newProduct = { name: "", price: 0.0 };
    },
    updateInventory: function() {
      this.$emit("update-inventory", [...this.filteredProducts]);
      this.emptyProducts();
    }
  }
};
</script>

<style scoped>
.add-product {
  border: 1px solid gray;
  width: 50%;
  padding: 10px;
}
.search-product,
.list-product,
.inventory {
  border: 1px solid gray;
  width: 50%;
  margin-top: 1%;
  padding: 10px;
}
</style>
