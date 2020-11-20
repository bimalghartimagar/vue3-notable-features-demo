<template>
    <div class="child">
      <h3>Vue2</h3>
        <div>
            <div class="add-product">
                <h2>Add Product</h2>
                <div>Name: <input name="name" v-model="newProduct.name" /></div>
                <div>Price: <input name="name" v-model="newProduct.price" /></div>
                <button @click="addProduct">Add</button>
            </div>
            <div class="search-product">
                <h2>Search Product</h2>
                <input name="name" v-model="filterText" />
                <button @click="searchProducts">Search</button>
            </div>
        </div>
        <div class="list-product">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in filteredProducts" :key="product">{{product.name}}:{{product.price}}</li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newProduct: {name: '', price: 0.00},
            productList: [
              {name: 'Milk', price: 2},
              {name: 'Carrot', price: 12},
              {name: 'Sugar', price: 8},
              {name: 'Cheese', price: 20}
              ],
            filterText: ''
        }
    },
    methods: {
      addProduct: function(){
        this.productList.push({...this.newProduct});
      }
    },
    computed: {
        filteredProducts: function () {
            if(this.filterText.trim().length > 0){
                return this.productList.filter(p => p.name.toLowerCase().indexOf(this.filterText.toLowerCase())>-1)
            }
            return this.productList;
        }
    }
}
</script>

<style scoped>
.add-product{
  border: 1px solid gray;
  width: 50%;
  padding: 10px;
}
.search-product{
  border: 1px solid gray;
  width: 50%;
  margin-top: 1%;
  padding: 10px;
}
.list-product{
  border: 1px solid gray;
  width: 50%;
  margin-top: 1%;
  padding: 10px;
}
</style>