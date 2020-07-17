import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const carsModule = {
  state: {
    cars: [],
    displayCars: [],
    carAttributes: [],
    carSearchText: "",
    carFilterRule: []
  },
  getters: {
    getCars: state => {
      return state.cars;
    },
    getCarAttributes: state => {
      return state.carAttributes;
    },
    getDisplayCars: state => {
      return state.displayCars;
    },
    getCarSearchText: state => {
      return state.carSearchText;
    },
    getCarFilterRule: state => {
      return state.carFilterRule;
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
      var rule = state.carFilterRule;

      state.cars.forEach(car => {
        if (
          car.model.search(text) != -1 &&
          (rule.Brand == "" || rule.Brand == car.brand) &&
          (rule.Location == "" || rule.Location == car.location) &&
          (rule.Color == "" || rule.Color == car.color) &&
          (rule.Seat == "" || rule.Seat == car.seat)
        )
          updateDisplayCars.push(car);
      });
      state.carSearchText = text;

      if (rule.price == "desc") {
        updateDisplayCars.sort((a, b) => (a.price < b.price ? 1 : -1));
      } else {
        updateDisplayCars.sort((a, b) => (a.price < b.price ? -1 : 1));
      }

      state.displayCars = updateDisplayCars;
    },
    setCarFilterRule(state, rule) {
      var updateDisplayCars = [];
      var text = state.carSearchText;

      state.cars.forEach(car => {
        if (
          car.model.search(text) != -1 &&
          (rule.Brand == "" || rule.Brand == car.brand) &&
          (rule.Location == "" || rule.Location == car.location) &&
          (rule.Color == "" || rule.Color == car.color) &&
          (rule.Seat == "" || rule.Seat == car.seat)
        )
          updateDisplayCars.push(car);
      });
      state.carFilterRule = rule;

      if (rule.price == "desc") {
        updateDisplayCars.sort((a, b) => (a.price < b.price ? 1 : -1));
      } else {
        updateDisplayCars.sort((a, b) => (a.price < b.price ? -1 : 1));
      }

      state.displayCars = updateDisplayCars;
    }
  },
  actions: {
    getCarsFromDB(context) {
      axios({
        method: "GET",
        url: "https://carredo.herokuapp.com/renting/car/available",
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
        url: "https://carredo.herokuapp.com/renting/car/filter",
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {
        var attributes = {};
        response.data.forEach(record => {
          if (attributes[record.type] == null) attributes[record.type] = [];
          attributes[record.type].push(record.value);
        });
        var outputAttributes = [];
        for (var i in attributes) {
          outputAttributes.push({
            title: i,
            options: attributes[i],
            selected: ""
          });
        }
        context.commit("setCarAttributes", outputAttributes);
      });
    }
  }
};

export default new Vuex.Store({
  modules: { carsModule }
});
