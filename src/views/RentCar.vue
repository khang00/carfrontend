<template>
  <div class="rent-car">
    <div class="car-detail-wrapper">
      <car-detail v-bind:car="car" />
    </div>
    <div class="form-car-wrapper">
      <car-form v-on:request="requestCar" />
    </div>
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";
import Form from "../components/Form.vue";
import axios from "axios";
export default {
  name: "RentCar",
  components: {
    "car-detail": CarDetail,
    "car-form": Form
  },
  data: function() {
    return {
      car: {}
    };
  },
  methods: {
    getCar: function(carIndex) {
      return this.$store.getters.getCars[carIndex];
    },
    requestCar: function(renter) {
      axios({
        method: "POST",
        url: "http://35.198.247.39/CarRentalManagement/renting/car",
        data: {
          car: {id: this.car.id},
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
    }
  },
  created: function() {
    this.car = this.getCar(this.$route.params.carId - 1);
  },
  beforeRouteUpdate: function(to, from, next) {
    this.car = this.getCar(to.params.carId - 1);
    next();
  }
};
</script>

<style lang="scss" scoped>
.rent-car {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat";

  .car-detail-wrapper {
    width: 80%;
    display: flex;
  }

  .form-car-wrapper {
    width: 80%;
    display: flex;
  }
}
</style>
