<template>
  <div class="partition footer">
    <div class="partition">
      <h1>Shop</h1>
      <ul>
        <li><a href="#">Men's Shoes</a></li>
        <li><a href="#">Women's Shoes</a></li>
        <li><a href="#">Kids Shoes</a></li>
        <li><a href="#">Gift Cards</a></li>
      </ul>
    </div>
    <div class="partition">
      <h1>About</h1>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Featured Press</a></li>
        <li><a href="#">Reviews</a></li>
      </ul>
    </div>
    <div class="partition">
      <h1>Support</h1>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="partition partitionform">
      <div class="form">
        <h1>Sign Up For Exclusive Events</h1>
        <div>
          <form action="#" class="formphone">
            <input type="email" id="email" placeholder="email@example.com" />
            <input type="submit" value="Join Us" />
          </form>
        </div>
        <div class="images">
          <img
            class="icon"
            src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/facebook_online_social_media-128.png"
          />
          <img
            class="icon"
            src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
          />
          <img
            class="icon"
            src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/youtube_online_social_media-128.png"
          />
        </div>
        <SearchBar />
      </div>

      <div class="cookies">
        <p>We use cookies to enhance your shopping experience</p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./sub_components/SearchBar.vue";
export default {
  name: "footer",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  font-size: 62.5%; /* 62.5% of 16px = 10px */
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr 0.8fr;
  height: 100vh;
  font-size: 10rem;
  justify-items: center;
}

.partition {
  /* border: 2px solid red;  */
  margin-right: 4rem;
}

.partition:last-child {
  margin-right: 0;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 3rem;
  font-family: "Roboto", sans-serif;
  max-width: 1500px;
}

h1 {
  margin-top: 2rem;
  color: #4d4d4d;
  font-size: 2rem;
  font-weight: bold;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  margin-top: 1rem;
  /* color: ; */
}

a:hover {
  color: #d1d1e0;
}

a {
  font-size: 2rem;
  text-decoration: none;
  color: #999999;
}

.partitionform {
  display: flex;
  flex-direction: column;
}

form {
  margin-top: 2rem;
}

input[type="email"] {
  border: 2px solid black;
  width: 17rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  size: 20ch;
}

input[type="submit"] {
  border: 0;
  width: 17rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  background-color: #004d99;
  color: white;
  text-transform: capitalize;
  margin-left: 1rem;
  cursor: pointer;
}

.images {
  margin-top: 2rem;
}

.icon {
  width: 3rem;
  height: 3rem;
}

p {
  margin-top: 4rem;
  font-size: 1.5rem;
  color: #999999;
}

/* will apply styles only if your browser's viewport width is equal to or narrower than 12450px: */
@media screen and (max-width: 605px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  ul {
    text-align: center;
  }

  .partition {
    /* border: 2px solid red; */
    margin-right: 0rem;
  }

  .formphone {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type="submit"] {
    margin-top: 2rem;
    margin-left: 0;
  }

  .images {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 1.4rem;
  }
}
</style>