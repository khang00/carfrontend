<template v-if="this.cars">
  <div class="car-display">
    <h2 class="heading">Caree</h2>
    <div class="search">
      <search />
      <i class="fas fa-sliders-h slider"></i>
    </div>

    <div class="car-filter">
      <car-filter class="filter" />
    </div>

    <h2>Feature</h2>
    <div class="feature-wrapper">
      <div class="feature">
        <div class="big-car">
          <car
            v-on:rent="rentCar(event, car.id)"
            class="car"
            v-bind:car="this.cars[0]"
            width="40"
          />
        </div>
        <div class="small-cars">
          <car
            v-on:rent="rentCar(event, car.id)"
            v-for="car in cars.slice(1, 4)"
            v-bind:key="car.id"
            v-bind:car="car"
            direction="horizontal"
          />
        </div>
      </div>
    </div>

    <h2>Recent</h2>
    <div class="recent">
      <car
        v-on:rent="rentCar(event, car.id)"
        v-for="car in cars"
        v-bind:key="car.id"
        v-bind:car="car"
        width="24.5"
      />
    </div>
  </div>
</template>

<script>
import Car from "../components/Car.vue";
import Search from "../components/Search.vue";
import CarFilter from "../components/Filter.vue";

export default {
  name: "Home",
  computed: {
    cars: function() {
      return this.$store.getters.getCars;
    }
  },
  components: {
    car: Car,
    search: Search,
    "car-filter": CarFilter
  },
  methods: {
    rentCar: function(event, id) {
      /* eslint-disable no-console */
      console.log(this.cars[id]);
    }
  },
  mounted: function() {
    this.$store.dispatch('construct');
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
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
  }

  .search {
    display: flex;
    width: 100%;
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

  .car-filter {
    position: relative;
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
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
        margin-right: 2vw;
      }

      .small-cars {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .recent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    margin-bottom: 5%;
    width: 80%;
  }
}
</style>
