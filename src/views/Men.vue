<template>
  <div class="men">
    <h1>Dummy data on men page</h1>
    <div class="containerForData" v-for="product in productData" v-bind:key="product.id">
      <p>Title: {{ product.title }} <br>
        Price: {{ product.price }} <br>
        Description: {{ product.description }} <br>
        Image: <img :src="product.image" />
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Men",
  data: () => ({
    shoe: ''
  }),

  computed: {
    productData () {
      return this.$store.getters.returnProducts
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
.containerForData{
  display: flex;
  justify-content: space-around;
  width: 100%;
}

img{
  height: 100px;
  max-width: 100px;
}

p{
  height: 40%;
  width: 40%;
}

h4{
  color: white;
}
</style>
