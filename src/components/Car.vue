<template>
  <div class="car-item">
    <img id="image" alt="carimg" src="http://35.198.247.39/images/car.jpg" />

    <div id="content">
      <div class="line">
        <p id="brand">{{ car.brand }}</p>
        <div v-if="role" id="box-status">
          <p id="status">{{ car.status }}</p>
        </div>
      </div>
      <p id="model">{{ car.model }}</p>
      <div class="inform-line">
        <i class="fas fa-search-location"></i>
        <p id="location">{{ car.location }}</p>
      </div>
      <div class="inform-line">
        <i class="fas fa-tag"></i>
        <p id="price">{{ car.price }}</p>
      </div>

      <div class="line">
        <div class="inform-line">
          <i class="fas fa-user-check"></i>
          <p id="seat">{{ car.seat + " seats"}}</p>
        </div>
        <i v-if="role" id="edit" class="fas fa-edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["car", "role"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p,
input {
  font-family: "Montserrat";
}
.car-item {
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 25vw;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  transition: 0.5s;
}
.car-item:hover {
  cursor: pointer;
}
.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#content {
  padding: 15px 20px;
}

#box-status {
  border-radius: 5px;
  padding: 5px 2px;
  background: #0bd60b;
  width: 80px;
  height: 20px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-weight: 500;
  }
}

#image {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}
.inform-line {
  display: flex;
  align-items: center;
  margin: 0 0 6px 0;
  font-weight: 350;
}
#brand {
  color: #b10000;
  font-weight: 600;
  margin: 0 0 0px 0;
}
#model {
  font-weight: bold;
  margin: 0 0 7px 0;
  font-size: 20px;
}
#location,
#price,
#seat {
  margin: 0 0 0 7px;
}
#edit {
  cursor: pointer;
}
</style>
