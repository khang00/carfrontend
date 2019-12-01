import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const carsModule = {
  state: {
    cars: []
  },
  getters: {
    getCars: state => {
      return state.cars;
    }
  },
  mutations: {
    construct(state, cars) {
      state.cars = cars;
      /* eslint-disable no-console */
      console.log(state.cars);
    }
  },
  actions: {
    construct(context) {
      /* eslint-disable no-console */
      console.log("store");
      
      axios({
        method: "GET",
        url: "http://35.198.247.39/CarRentalManagement/renting/car/available",
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {
        /* eslint-disable no-console */
        console.log("store2");
        context.commit("construct", response.data);
      });
    }
  }
};

export default new Vuex.Store({
  modules: { carsModule }
});
