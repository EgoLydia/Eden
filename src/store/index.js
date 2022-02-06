import Vue from "vue";
import Vuex from "vuex";
import SERVER from "./server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  getters: {
    images: (state) => {
      return state.images;
    },
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    fetchImages(context) {
      const fetchPromise = new Promise((resolve, reject) => {
        const response = SERVER.get("breeds/image/random/50");
        response
          .then((res) => {
            console.log(res.data)
            if (res.data.status == "success") {
              context.commit("setImages", res.data.message);
              resolve();
            } else {
              reject();
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
      return fetchPromise;
    },
  },

  modules: {},
});
