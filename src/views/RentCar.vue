<template>
  <div class="rent-car">
    <car-detail v-bind:car="car"/>
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";
export default {
  name: "RentCar",
  components: {
    "car-detail": CarDetail
  },
  data: function() {
    return {
      car: {}
    };
  },
  methods: {
    getCar: function(carIndex) {
      return this.$store.getters.getCars[carIndex];
    }
  },
  created: function() {
    this.car = this.getCar(this.$route.params.carId - 1);
  }
};
</script>

<style lang="scss" scoped></style>
