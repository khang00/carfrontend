<template>
  <div class="rent-car">
    <p v-on:click="rentCar">aaaaaaaaaaaaaaaaaaa</p>
  </div>
</template>

<script>
export default {
  name: 'RentCar',
  methods: {
    rentCar: function () {
      /* eslint-disable no-console */
      console.log('car');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>