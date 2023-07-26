<template>
  <div class="parent">
    <img class="img" src="../assets/sneakerlogo.png" alt="sneaker logo" width="100" height="100">
    <h1 class="h3">Free Run 2</h1>
  </div>
  <div class="row">
    <div class="column">
      <img src="../assets/free-run-2-pure-platinum1.jpg" alt="free run sneakers" width="400" height="400">
    </div>
        <h2 class="h2">Product Descripton</h2>
        <p class="p3">Comfy, flexible and easy to wear—the Free Run 2 transforms a running staple into a shoe that can go just about anywhere. The deep grooves in the sole are the signature of the Free's "barefoot-like" feel. Plush details around the collar and soft foam underfoot deliver comfort all day long. A white and Pure Platinum upper sets up a striking black Swoosh for standout styling.</p>
    <div class="column">
      <p class="p1">Pure Platinum</p>
      <p class="p2"><label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 5" checked> UK 5 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 6" checked> UK 6 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 7" checked> UK 7 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 8" checked> UK 8 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 9" checked> UK 9 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 10" checked> UK 10 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 11" checked> UK 11 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 12" checked> UK 12 </label>
      <label for="shoe-size"><input id="shoe-size" type="radio" name="shoe-size" value="UK 14" checked> UK 14 </label></p>
      <p class="p3"><input type="button" value="Add to Bag"></p>
      <p class="p3">£99.95</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
};
</script>

<style  scoped>

  .p1 {
    font-size: 20px ;
    font-family: Roboto ;
    font-style: oblique ;
    text-align: center ;
    color: rgb(10, 2, 2);
  }
  .p2 {
    font-size: 20px ;
    font-family: Roboto ;
    text-align: center ;
    color: rgb(6, 75, 21);

  } 
  .p3 {
    font-size: 25px ;
    font-family: Libre Baskerville ;
    line-height: 35px;
    text-align: center;
    color: rgb(14, 14, 61);
  }
  .h2 {
    font-size: 20px ;
    font-family: Roboto ;
    text-align: center;
    color: rgb(2, 2, 37);
  }
  .h3 {
    font-size: 35px ;
    font-family: Roboto ;
    text-align: left ;
    color: rgb(214, 233, 231);
  }
* {
  box-sizing: border-box ;
}

.img {
  align-items: left ;
  border-radius: 50% ;
  padding: 5px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  padding: 10px ;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.column {
  float: left;
  width: 50%;
  padding: 15px;
}

.row{
  width: 90%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
overflow: hidden;
background-color: rgb(61, 59, 59);
padding: 10px ;
}


@media screen and (max-width:600px) {
  .column {
    width: 100%;

}}
</style>