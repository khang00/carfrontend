<template>
  <div class="car-display">
    <h2 class="heading">Caree</h2>
    <div class="search">
      <search />
      <i class="fas fa-sliders-h slider" v-on:click="toggleFilter"></i>
    </div>

    <div id="car-filter">
      <car-filter v-bind:dropBoxes="dropBoxList" />
    </div>

    <div id="feature" v-if="!isSearchDisplay">
      <h2>Feature</h2>
      <div class="feature-wrapper">
        <div class="feature">
          <div class="big-car">
            <car
              v-on:rent="rentCar(cars[0].id, cars[0])"
              class="car"
              v-bind:car="cars[0]"
            />
          </div>
          <div class="small-cars">
            <car
              v-on:rent="rentCar(car.id, car)"
              v-for="car in cars.slice(1, 4)"
              v-bind:key="car.id"
              v-bind:car="car"
              direction="horizontal"
            />
          </div>
        </div>
      </div>
    </div>

    <div id="recent">
      <h2 v-if="!isSearchDisplay">Recent</h2>
      <h2 v-else>Results</h2>
      <p v-if="displayCars.length == 0">No car found</p>
      <div class="recent">
        <car
          v-on:rent="rentCar(car.id, car)"
          v-for="car in displayCars"
          v-bind:key="car.id"
          v-bind:car="car"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Car from "../components/Car.vue";
import Search from "../components/Search.vue";
import CarFilter from "../components/Filter.vue";

export default {
  name: "Home",
  data: function() {
    return {};
  },
  computed: {
    filterRule: function() {
      return this.$store.getters.getCarFilterRule;
    },
    cars: function() {
      return this.$store.getters.getCars;
    },
    displayCars: function() {
      return this.$store.getters.getDisplayCars;
    },
    carSearchText: function() {
      return this.$store.getters.getCarSearchText;
    },
    isSearchDisplay: function() {
      var ruleCheck = false;
      var rules = this.$store.getters.getCarFilterRule;
      for (var rule in rules) {
        if (rules[rule] != "") {
          ruleCheck = true;
          break;
        }
      }
      return this.$store.getters.getCarSearchText.length > 0 || ruleCheck;
    },
    dropBoxList: function() {
      return this.$store.getters.getCarAttributes;
    }
  },
  components: {
    car: Car,
    search: Search,
    "car-filter": CarFilter
  },
  methods: {
    toggleFilter: function() {
      var x = document.getElementById("car-filter");
      if (x.style.display == "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
      this.carClones = [];
    },
    rentCar: function(id, car) {
      this.$router.push({ name: "RentCar", params: { carId: id, car: car } });
    }
  }
};
</script>

<style lang="scss" scoped>
.car-display {
  position: relative;
  width: 80%;
  height: 100%;
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  h2 {
    font-size: 40px;
  }

  .heading {
    text-align: center;
    font-size: 70px;
    margin: 30px;
  }

  .search {
    display: flex;
    width: 100%;
    margin: 0 0 40px 0;
    justify-content: center;
    align-items: center;

    .slider {
      transform: scale(1.5, 1.5);
      transition: 300ms;
      margin-left: 5%;

      &:hover {
        cursor: pointer;
      }
    }
  }

  #car-filter {
    position: relative;
    width: 100%;
    margin: 0 0 40px 0;
    display: flex;
    justify-content: center;
  }

  #feature,
  #recent {
    margin-bottom: 40px;
    h2 {
      margin-top: 0;
    }
  }

  .feature-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;

    .feature {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .big-car {
        margin-right: 2.5vw;
        width: 50%;
      }

      .small-cars {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .recent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    margin-bottom: 5%;
    width: 100%;
  }
}
</style>
