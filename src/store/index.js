import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const carsModule = {
  state: {
    cars: [],
    displayCars: [],
    carAttributes: [],
    carSearchText: ''
  },
  getters: {
    getCars: (state) => {
      return state.cars;
    },
    getCarAttributes: (state) => {
      return state.carAttributes;
    },
    getDisplayCars: (state) => {
      return state.displayCars;
    },
    getCarSearchText: (state) => {
      return state.carSearchText;
    }
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    },
    setCarAttributes(state, carAttributes) {
      state.carAttributes = carAttributes;
    },
    setDisplayCars(state, cars) {
      state.displayCars = cars;
    },
    setCarSearchText(state, text) {
      var updateDisplayCars = [];
      state.cars.forEach(car => {
        if (car.model.search(text) != -1)
          updateDisplayCars.push(car);
      });
      state.carSearchText = text;
      state.displayCars = updateDisplayCars;
    }
  },
  actions: {
    getCarsFromDB(context) {
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
        context.commit("setCars", response.data);
        context.commit("setDisplayCars", response.data);
      });
    },
    getCarAttributesFromDB(context) {
      axios({
        method: "GET",
        url: "http://35.198.247.39/CarRentalManagement/renting/car/filter",
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {
        var attributes = {};
        (response.data).forEach(record => {
          if (attributes[record.type] == null)
            attributes[record.type] = [];
          attributes[record.type].push(record.value);
        });
        var outputAttributes = [];
        for (var i in attributes) {
          outputAttributes.push({ title: i, options: attributes[i] });
        }
        context.commit("setCarAttributes", outputAttributes);
      });
    }
  }
};

export default new Vuex.Store({
  modules: { carsModule }
});
