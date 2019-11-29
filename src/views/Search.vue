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
      <div class="big-car">
        <car class="car" v-bind:car="this.cars[0]" width="40" />
      </div>
      <div class="small-cars">
        <car class="car" v-bind:car="this.cars[1]" width="" direction="horizontal" />
        <car class="car" v-bind:car="this.cars[2]" direction="horizontal" />
        <car class="car" v-bind:car="this.cars[3]" direction="horizontal" />
      </div>
    </div>

    <h2>Recent</h2>
    <div class="recent">
      <car
        class="car"
        v-for="car in cars"
        v-bind:key="car.id"
        v-bind:car="car"
        width="24.5"
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
      padding: 4% 0%;
    }
  }

  .feature {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;

    .big-car{
      margin-right: 3%;
    }

    .small-cars{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .small-cars .car{
      width: 100%;
    }
  }

  .recent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2.5%;
    grid-row-gap: 5%;
    margin-bottom: 5%;
    width: 80%;
  }
}
</style>
