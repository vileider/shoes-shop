<template>
  <div class="main-content">
    <div class="viewsContener">
      <router-view />
    </div>
    <div class="sideBar">
      <SideBarComponent />
    </div>
  </div>
</template>

<script>
import SideBarComponent from "./SideBarComponent.vue";

export default {
  name: "PageMainContent",
  components: {
    SideBarComponent,
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
}

.sideBar {
  width: 15%;
}

.viewsContener {
  /* background-color: #80d380; */
  width: 85%;
}
</style>
