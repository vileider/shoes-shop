<template>
  <div class="home">
    <div style="category-images">
      <img src="../assets/man_shoes.jpg" alt="manShoes" />
    </div>
    <div style="category-images">
      <img src="../assets/women_shoes.jpg" alt="womanShoes" />
      <div class="text"></div>
    </div>
    <div style="category-images">
      <img src="../assets/kids_shoes.jpg" alt="kidsShoes" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>


<style scoped>
img {
  width: 200px;
  height: 200px;
}
.home {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  /* background-repeat: no-repeat; */
  /* background-size: 100% auto;
  background-image: url("../assets/hero.jpg"); */
}
.category-images {
  position: relative;
}
.text {
  position: absolute;
  top: 50%;
  color: white;
}
img:hover {
  opacity: 0.5;
}
</style>