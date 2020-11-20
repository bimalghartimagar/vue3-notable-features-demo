import { computed, ref } from "vue";

export default function useProductNameSearch(products) {
  const filterText = ref('');

  const filteredProducts = computed(() => {
    if (filterText.value.trim().length > 0) {
      return products.value.filter(p => p.name.toLowerCase().indexOf(filterText.value.toLowerCase()) > -1)
    }
    return products.value;
  })

  return {
    filterText,
    filteredProducts
  }
}