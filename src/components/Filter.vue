<template>
  <div class="filter-item">
    <div class="filter-wrapper">
      <h2>Filter</h2>

      <div class="select">
        <select>
          <option value>Seats</option>
          <option
            value="car.NumberSeat"
            v-bind:key="car.NumberSeat"
            v-for="car in cars"
            >{{ car.NumberSeat }}</option
          >
        </select>
        <select>
          <option value>Location</option>
          <option value="car.Place" v-bind:key="car.Name" v-for="car in cars">{{
            car.Place
          }}</option>
        </select>
        <select>
          <option value>Price</option>
          <option value="car.Price" v-bind:key="car.Name" v-for="car in cars">{{
            car.Price
          }}</option>
        </select>
        <select>
          <option value>Color</option>
          <option value="car.Color" v-bind:key="car.Name" v-for="car in cars">{{
            car.Color
          }}</option>
        </select>
        <select>
          <option value>Brand</option>
          <option value="car.Brand" v-bind:key="car.Name" v-for="car in cars">{{
            car.Brand
          }}</option>
        </select>
      </div>

      <form action class="choose">
        <div class="choice">
          <input type="checkbox" name="text1" value="text" checked />Text
        </div>
        <div class="choice">
          <input type="checkbox" name="text2" value="text" />Text
        </div>
        <div class="choice">
          <input type="checkbox" name="text3" value="text" />Text
        </div>
        <div class="choice">
          <input type="checkbox" name="text4" value="text" />Text
        </div>
        <div class="choice">
          <input type="checkbox" name="text5" value="text" />Text
        </div>
        <div class="choice">
          <input type="checkbox" name="text6" value="text" />Text
        </div>
      </form>
    </div>

    <div class="button">
      <button id="submit">Filter</button>
      <button
        id="cancel"
        onclick="window.location.href = '../components/HelloWorld.vue';"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarFilter",
  data: function() {
    return {
      cars: [
        {
          Name: "Tesla",
          Place: "Ho Chi Minh City, Viet Nam",
          Price: "200$/day",
          NumberSeat: "4 seats",
          Color: "Black",
          Brand: "Audi"
        },
        {
          Name: "Tesla2",
          Place: "Hai phong City, Viet Nam",
          Price: "500$/day",
          NumberSeat: "7 seats",
          Color: "White",
          Brand: "Teslaaa"
        },
        {
          Name: "Tesla3",
          Place: "Ha Noi City, Viet Nam",
          Price: "1000$/day",
          NumberSeat: "50 seats",
          Color: "Grey",
          Brand: "Honda"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
h2,
button,
option,
input,
select {
  font-family: "Montserrat";
}

.filter-item {
  border-radius: 13px;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-item h2 {
  text-align: left;
  margin-left: 6%;
  margin-top: 0%;
}

.filter-item .select {
  text-align: left;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  margin-left: 6%;
  margin-top: 1.2%;
  margin-bottom: 1.2%;
  margin-right: 6%;
  grid-gap: 15%;
  grid-row-gap: 10px;
}

.filter-item select {
  border: 0px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.161);
  padding-top: 2.5%;
  font-size: 15px;
}

.filter-item .button {
  height: 85%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 3.5%;
}

.filter-item .button button {
  border-radius: 10px;
  padding: 10px 20px;
  transition: 300ms;
  font-weight: 600;
}

button#cancel {
  background: white;
  border: solid 1px rgba(0, 0, 0, 0.161);
  margin-top: -2%;
  color: rgba(0, 0, 0, 0.65);
}

button#submit {
  border-style: none;
  padding: 11px 25px;
  margin: 20px;
}

button:hover{
  cursor: pointer;
}

.choose {
  text-align: left;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  margin-left: 6%;
  margin-top: 4%;
  grid-gap: 7%;
  grid-row-gap: 10px;
}
</style>
