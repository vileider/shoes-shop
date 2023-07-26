<template>
  <div class="login-container">
    <img
      class="icon"
      src="https://cdn.iconscout.com/icon/premium/png-64-thumb/login-4070272-3367043.png"
    />
    <form class="forme">
      <label class="label1" for="fname">E-Mail Address:</label><br />
      <input
        class="text1"
        type="email"
        id="fname"
        name="fname"
        placeholder="example@mail.com"
        required
      />
      <label class="label2" for="lname">Password:</label><br />
      <input
        class="text2"
        type="password"
        id="lname"
        name="lname"
        placeholder="******"
        required
      />
      <div class="opcoesuser">
        <input class="btnok" type="submit" value="Log In" />
        <input class="btnok" type="submit" value="New Client ?" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Header_sub_component",
};
</script>

<style scoped>
.login-container {
  --blue_submit: #004d99;
  --hover: #d1d1e0;
  --h1: #4d4d4d;
  --h2: #999999;
}

.container1 {
  /* border: 2px solid red; */
  height: 8rem;
}

.container2 {
  height: 100%;
  /* border: 1px solid black; */
  max-width: 1000px;
  margin: 0 auto;
}

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo h1 {
  font-size: 2.5rem;
  font-family: "Oswald", sans-serif;
  color: var(--blue_submit);
}

.logo h6 {
  font-family: "Grey Qo", cursive;
  font-family: "Oswald", sans-serif;
  font-size: 1.4rem;
  color: var(--h1);
}

.login-container:hover .forme {
  display: grid;
  z-index: 1;
}

.icon {
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  color: var(--blue_submit);
  font-size: 1.5rem;
  transition: color 0.4s;
}

.icon:hover {
  color: var(--hover);
}

.icon {
  height: 1.5rem;
  padding-top: 0.3rem;
}

.forme {
  background-color: #ffffff;
  display: none;
  right: 0;
  position: absolute;
  border: 2.5px solid var(--blue_submit);
  border-radius: 3%;
  top: 30px;
  left: -310px;
  padding: 1rem;
  z-index: 1;
  grid-template-columns: 7rem 11rem;
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  justify-items: center;
  align-items: center;
}

input[type="submit"] {
  border: 0;
  width: 8rem;
  height: 2rem;
  text-align: center;
  font-size: 1rem;
  background-color: #004d99;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 5%;
}

input[type="email"],
input[type="password"] {
  border: 1px solid var(--h1);
  width: 100;
  height: 2rem;
  text-align: center;
  font-size: 1rem;
}

label {
  font-family: "Oswald", sans-serif;
}

.label1 {
  grid-row: 1/2;
  justify-self: start;
}

.text1 {
  grid-row: 1/2;
  grid-column: 2/3;
}

.label2 {
  grid-row: 2/3;
  justify-self: start;
}

.text2 {
  grid-row: 2/3;
  grid-column: 2/3;
}

.opcoesuser {
  grid-row: 4/5;
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

/* .btnok {
  grid-row: 4/5;
}
*/

.btnnewclient {
  font-size: 1.5rem;
}
</style>