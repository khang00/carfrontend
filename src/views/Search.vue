<template>
  <div class="car-display">
    <h2>Caree</h2>
    <div class="search">
      <search />
      <i class="fas fa-sliders-h slider"></i>
    </div>

    <div class="car-filter">
      <car-filter class="filter" />
    </div>

    <h2>Feature</h2>
    <div class="feature">
      <car
        class="car"
        v-for="car in cars"
        v-bind:key="car.id"
        v-bind:car="car"
        role="1"
      />
    </div>

    <h2>Recent</h2>
    <div class="recent">
      <car
        class="car"
        v-for="car in cars"
        v-bind:key="car.id"
        v-bind:car="car"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Car from "../components/Car.vue";
import Search from "../components/Search.vue";
import CarFilter from "../components/Filter.vue";

export default {
  name: "Search",
  data: function() {
    return {
      cars: null
    };
  },
  components: {
    car: Car,
    search: Search,
    "car-filter": CarFilter
  },
  mounted: function() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8080/CarRentalManagement/renting/car/available",
      config: {
        headers: {
          // set content type
          "content-type": "application/json",
          charset: "utf-8"
        }
      }
    }).then(reponse => {
      this.cars = reponse.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
.car-display {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
  }

  .search {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .slider {
      transform: scale(1.5, 1.5);
      transition: 300ms;
      margin-left: 3%;
      &:hover {
        cursor: pointer;
      }
    }

    width: 100%;
    display: flex;
  }

  .car-filter {
    position: relative;
    margin: 2.3%;
    display: inline-block;

    .filter {
      position: relative;
      height: 31vh;
    }
  }

  .recent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5%;
    margin-bottom: 5%;
  }
}
</style>
