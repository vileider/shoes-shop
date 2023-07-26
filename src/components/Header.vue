<template>
  <div class="header">
    <div class="logo">
      <h1>TipTop</h1>
      <h6>Shoe Store</h6>
    </div>
    <div class="navigation">
      <div class="navigation-link">
        <router-link class="routerLink" to="/">Home</router-link>
        <div class="dropList">
          <a href="#">CUSTOM1</a>
          <a href="#">CUSTOM2</a>
          <a href="#">CUSTOM3</a>
        </div>
      </div>
      <div class="navigation-link">
        <router-link class="routerLink" to="/women">Women</router-link>
        <div class="dropList">
          <a href="#">CUSTOM1</a>
          <a href="#">CUSTOM2</a>
          <a href="#">CUSTOM3</a>
        </div>
      </div>
      <div class="navigation-link">
        <router-link class="routerLink" to="/men">Men</router-link>
        <div class="dropList">
          <a href="#">CUSTOM1</a>
          <a href="#">CUSTOM2</a>
          <a href="#">CUSTOM3</a>
        </div>
      </div>
      <div class="navigation-link">
        <router-link class="routerLink" to="/kids">Kids</router-link>
        <div class="dropList">
          <a href="#">CUSTOM1</a>
          <a href="#">CUSTOM2</a>
          <a href="#">CUSTOM3</a>
        </div>
      </div>
      <div class="navigation-link">
        <Header_sub_component />
        <!-- <router-link class="routerLink" to="/about">About</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header_sub_component from "./sub_components/Header_sub_component.vue";

export default {
  name: "Header",
  components: {
    Header_sub_component,
  },
};
</script>

<style scoped>
.routerLink {
  font-size: 24px;
  text-decoration: none;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.navigation {
  display: flex;
  width: 350px;
  justify-content: space-around;
  list-style: none;
}
.navigation-link {
  position: relative;
  display: inline-block;
}
.dropList {
  z-index: 1;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 95px;
  height: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dropList a {
  padding-top: 10px;
  padding-bottom: 5px;
  text-decoration: none;
  list-style: none;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.dropList a:hover {
  background-color: #66b032;
}
.navigation-link:hover .dropList {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.header {
  align-items: center;
  padding: 15px;

  height: 110px;
  background-color: var(--header_background);
  display: flex; /*A Flexible Layout must have a parent element with the display property set to flex.*/
  justify-content: space-between; /*Sets the free space in between the elements*/
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.logo h1 {
  font-size: 40px;
  font-family: "Oswald", sans-serif;
  color: var(--header_text_main);
}
.logo h6 {
  font-family: "Grey Qo", cursive;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: var(--header_text_menu);
}
</style>