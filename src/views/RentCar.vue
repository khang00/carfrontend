<template>
  <div class="rent-car">
    {{ this.car }}
  </div>
</template>

<script>
export default {
  name: "RentCar",
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
