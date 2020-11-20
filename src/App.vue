<template>
  <div class="parent">
  <product-list />
  <product-list-3 />
  </div>

  <teleport to="#destination">Teleported outside Vue App Component</teleport>

</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductList3 from './components/ProductList3.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductList3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.parent{
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
