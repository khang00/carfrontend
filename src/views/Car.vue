<template>
  <div class="car-item">
    <img alt="carimg" src="http://localhost:8080/images/car.jpg" />
    <div id="status">{{ car.status }}</div>
    <div id="content">
      <h4>{{ car.model }}</h4>
      <h2>{{ car.brand }}</h2>
      <p>{{ car.color }}</p>
      <p>{{ car.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["car"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
h2,
h4,
p,
input {
  font-family: "Montserrat";
}
.car-item {
  position: relative;
  display: block;
  border-radius: 1em;
  height: 65vh;
  width: 60vh;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  transition: 0.5s;
}

.car-item:hover {
  transform: scale(1.05);
}

div#content {
  line-height: 7px;
  text-align: left;
  margin-left: 5%;
}

div#status {
  display: block;
  border-radius: 7px;
  border: 1em;
  background: #0bd60b;
  width: 20%;
  position: absolute;
  left: 78%;
  margin-top: 5px;
  color: white;
  font-size: 14px;
  text-align: center;
}

img {
  height: 40vh;
  width: 60vh;
  border-radius: 10px 10px 0px 0px;
}

h1,
h2,
h3,
h4 {
  font-family: Montserrat;
}

div#content h4 {
  color: red;
}

div#content p {
  margin-left: 5%;
}
</style>
