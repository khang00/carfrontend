<template>
  <div class="rent-car">
    <h2 class="heading" v-on:click="backHome">Caree</h2>
    <div class="search">
      <search />
      <i class="fas fa-sliders-h slider" v-on:click="toggleFilter"></i>
    </div>

    <div id="car-filter">
      <car-filter v-bind:dropBoxes="dropBoxList" />
    </div>

    <div class="car-detail-wrapper">
      <car-detail v-bind:car="currCar" />
    </div>
    <div class="form-car-wrapper">
      <car-form v-on:request="requestCar" />
    </div>
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";
import Form from "../components/Form.vue";
import Search from "../components/Search.vue";
import Filter from "../components/Filter.vue";
import axios from "axios";
export default {
  name: "RentCar",
  components: {
    "car-detail": CarDetail,
    "car-form": Form,
    search: Search,
    "car-filter": Filter
  },
  data: function() {
    return {
      car: {}
    };
  },
  computed: {
    dropBoxList: function() {
      return this.$store.getters.getCarAttributes;
    },
    carSearchText: function() {
      return this.$store.getters.getCarSearchText;
    },
    carId: function() {
      return this.$route.params.carId - 1;
    },
    currCar: function() {
      return this.$store.getters.getCars[this.carId];
    }
  },
  methods: {
    requestCar: function(renter) {
      axios({
        method: "POST",
        url: "http://35.198.247.39/CarRentalManagement/renting/car",
        data: {
          car: { id: this.car.id },
          renter: renter
        },
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {
        /* eslint-disable no-console */
        console.log(response);
      });
    },
    toggleFilter: function() {
      var x = document.getElementById("car-filter");
      if (x.style.display == "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
      this.carClones = [];
    },
    backHome: function() {
      this.$router.push("/");
    }
  },
  
  // created: function() {
  //   this.car = this.getCar(this.$route.params.carId - 1);
  // },
  // beforeRouteUpdate: function(to, from, next) {
  //   this.car = this.getCar(to.params.carId - 1);
  //   next();
  
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  width: 80%;
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
  width: 80%;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
}
.rent-car {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat";

  .car-detail-wrapper {
    width: 80%;
    display: flex;
    margin: 40px 0 0 0;
  }

  .form-car-wrapper {
    width: 80%;
    display: flex;
  }
  .heading {
    text-align: center;
    font-size: 70px;
    margin: 30px;
    cursor: pointer;
  }
}
</style>
