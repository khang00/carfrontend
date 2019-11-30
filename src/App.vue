<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ViewCar">View Car</router-link> |
      <router-link to="/Car">Car</router-link>
    </div>
    <router-view />
    <!-- <home v-bind:text="car"/> -->
    <!-- <div class="body-wrapper">
      <div class="recent">
        <car class="car" v-for="car in cars" v-bind:key="car.id" v-bind:car="car" />
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
//import Car from "./views/Car.vue";
export default {
  data: function() {
    return {
      cars: null
    };
  },
  method: {},
  components: {
    //car: Car
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
>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:regular,100,200,300,350,400,500,600,700,800,900&display=swap");
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css);
#nav{
  
}

body {
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
