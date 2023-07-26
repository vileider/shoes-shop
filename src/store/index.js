import { createStore } from 'vuex'

export default createStore({
  state: {
    products: {}
  },
  mutations: {
    SET_PRODUCT_DATA (state, products) {
      state.products = products
    }
  },
  actions: {
    async getProducts ({ commit }) {
      //https://fakestoreapi.com/products
      await fetch('https://awesome-product-api.eu-gb.mybluemix.net/products')
            .then(res=>res.json())
            .then(json=>commit('SET_PRODUCT_DATA', json))
    }
  },
  modules: {
  },
  getters: {
    returnProducts: state => state.products
    }
});
