<template>
  <div class="parent">
    <product-list />
    <product-list-3 @update-inventory="addToInventory"/>
  </div>

  <div id="inventory">
    <span v-show="inventory.length === 0">Inventory is empty.</span>
  <div v-show="inventory.length > 0">
    <h3>Inventory</h3>
    <ul>
      <li v-for="item in inventory" :key="item.name">{{item.name}}: {{item.price}}</li>
    </ul>
      Total: ${{inventory.reduce((acc,product)=>acc=acc+(+product.price),0)}}
  </div>
  </div>

  <teleport to="#destination">Teleported outside Vue App Component</teleport>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ProductList3 from "./components/ProductList3.vue";

export default {
  name: "App",
  components: {
    ProductList,
    ProductList3
  },
  data(){
    return {
      inventory: []
    }
  },
  methods: {
    addToInventory(products){
      this.inventory = [...this.inventory, ...products];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.parent {
  display: grid;
  grid-template-columns: 50% 50%;
}

#destination, #count{
  margin-bottom: 20px;
  width: fit-content;
}
</style>
