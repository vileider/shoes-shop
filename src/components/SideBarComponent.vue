<template>
  <div class="centerpage">
      <div class="container">
        <div class="container__foto">
          <a href="#">
            <img
              class="foto__img"
              src="https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h1 class="noselect">Women</h1>
          </a>
        </div>
        <div class="container__foto">
          <a href="#">
            <img
              class="foto__img"
              src="https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h1>Men</h1>
          </a>
        </div>
        <div class="container__foto">
          <a href="#">
            <img
              class="foto__img"
              src="https://images.pexels.com/photos/5623070/pexels-photo-5623070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h1>Kids</h1>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SideBarComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Variables */

:root {
  --foto_witdh: 20rem;
}

/* Apply border-box */

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* This will make it easy for us to use rem as a measure */
html {
  /*62.5% of 16px = 10px */
  font-size: 62.5%;
}

.centerpage {
  margin: 0 auto;
  /* max-width: 1100; */
  width: var(--foto_witdh);
  background-color: white; /* with white background is more readeble */
}

.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
}

.foto__img {
  object-fit: cover; /*images keep the correct form */
  width: 100%;
  height: 20rem;
  transition: opacity 0.5s;
}

a {
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: #004d99;
}

a:hover > .foto__img {
  opacity: 0.2;
}

a:hover > h1 {
  max-height: 20rem;
  opacity: 1;
}

.container__foto {
  position: relative;
}

.container__foto h1 {
  position: absolute;
  /*We'll use this instead of display:none; to create an effect w/ transition property*/
  max-height: 0; /* Here we'll have overflow */
  overflow: hidden;
  opacity: 0;
  top: 50%;
  left: 50%;
  /* Because it will center the W point and not the full word */
  transform: translate(-50%, -50%);
  transition: max-height 0.5s;
  transition: opacity 0.8s;
}

</style>
