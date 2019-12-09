<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Maintenancer">M</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default{
  name: "App",
  mounted: function() {
    this.$store.dispatch("getCarsFromDB");
    this.$store.dispatch("getCarAttributesFromDB");
  }
}
</script>
>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:regular,100,200,300,350,400,500,600,700,800,900&display=swap");
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css);
body {
  margin: 0px;
}

#app {
  font-family: "Montserrat";
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
