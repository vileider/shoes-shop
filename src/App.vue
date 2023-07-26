<template>
  <div>
    <Header />
    <PageMainContent />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PageMainContent from "./components/PageMainContent.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    PageMainContent,
    Footer,
  },
  mounted () {
    this.$store.dispatch('getProducts')
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Grey+Qo&family=Oswald:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap");

body {
  width: 100%;
  margin: 0 auto; /*horizontally center the element within its container*/
}
:root {
  --header_background: #66b032;
  --header_text_main: #f3f3f1;
  --header_text_menu: #092834;
}
</style>