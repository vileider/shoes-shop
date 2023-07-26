<template>
  <div class="topnav">
    <input type="text" placeholder="Search.." />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style  scoped>
input[type="text"] {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}

@media screen and (max-width: 600px) {
  input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }

  input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
