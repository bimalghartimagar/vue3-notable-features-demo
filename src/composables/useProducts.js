import { ref } from "vue";

export default function userProducts() {
  const products = ref([
    {name: 'Milk', price: 2},
    {name: 'Carrot', price: 12},
    {name: 'Sugar', price: 8},
    {name: 'Cheese', price: 20}
  ]);

  const addProduct = (product) => products.value.push(product);

  const emptyProducts = () => products.value.splice(0);

  return {
    products,
    addProduct,
    emptyProducts
  }
}