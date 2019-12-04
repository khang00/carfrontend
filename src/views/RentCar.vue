<template>
  <div class="rent-car">
    <car-detail v-bind:car="car"/>
    <car-form/>
    {{this.car}}
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";
import Form from "../components/Form.vue"
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
    }
  },
  created: function() {
    this.car = this.getCar(this.$route.params.carId - 1);
  }
};
</script>

<style lang="scss" scoped></style>
