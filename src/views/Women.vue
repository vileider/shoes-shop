<template>
  <div class="women">
    <h1>This is a women page</h1>
    <ProductPage />
  </div>
</template>

<script>
import ProductPage from "../components/ProductPage.vue";

export default {
  name: "Women",

  components: {
    ProductPage,
  },
};
</script>
