import { ref } from "vue";

export default function userProducts(){
  const products = ref([
    {name: 'Custard', price: 32},
    {name: 'Pumpkin', price: 21},
    {name: 'Salt', price: 5},
    {name: 'Cottage Cheese', price: 17}
    ]);

  const addProduct = (product) => products.value.push(product);

  return {
    products,
    addProduct
  }
}