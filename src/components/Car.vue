<template>
  <div class="car" v-on:click="rent">
    <div
      v-if="direction == 'horizontal'"
      class="car-item-row"
      v-bind:style="{ width: width + 'vw', height: height + 'vh' }"
    >
      <img id="image-row" alt="carimg" v-bind:src="car.imageUrls[0]" />

      <div id="content">
        <div class="line">
          <p id="brand">{{ car.brand }}</p>
          <div v-if="role == 'admin'" id="box-status">
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
            <p id="seat">{{ car.seat + " seats" }}</p>
          </div>
          <!-- <i v-if="role == 'admin'" id="edit" class="fas fa-edit"></i> -->
        </div>
      </div>
    </div>

    <div
      v-else-if="role == 'maintenancer'"
      class="car-item-col car-item-maintenancer"
      v-bind:style="{ width: width + 'vw', height: height + 'vh' }"
    >
      <img
        id="image-col"
        class="image-col-maintenancer"
        alt="carimg"
        v-bind:src="car.imageUrls[0]"
      />

      <div id="content">
        <div class="line">
          <p id="brand">{{ car.brand }}</p>
          <div v-if="role == 'admin'" id="box-status">
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
            <p id="seat">{{ car.seat + " seats" }}</p>
          </div>
          <!-- <i v-if="role == 'admin'" id="edit" class="fas fa-edit"></i> -->
        </div>
      </div>
    </div>

    <div
      v-else
      class="car-item-col"
      v-bind:style="{ width: width + 'vw', height: height + 'vh' }"
    >
      <img id="image-col" alt="carimg" v-bind:src="car.imageUrls[0]" />

      <div id="content">
        <div class="line">
          <p id="brand">{{ car.brand }}</p>
          <div v-if="role == 'admin'" id="box-status">
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
            <p id="seat">{{ car.seat + " seats" }}</p>
          </div>
          <!-- <i v-if="role == 'admin'" id="edit" class="fas fa-edit"></i> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: {
    car: {
      type: Object,
      default: function() {
        return {};
      }
    },
    role: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: ""
    },
    radius: Array
  },
  methods: {
    rent: function(event) {
      this.$emit("rent", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p,
input {
  font-family: "Montserrat";
}
.car-item-col {
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
}
.car-item-row {
  display: flex;
  flex-direction: row;
  border-radius: 9px;
  //width: 25vw;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
}
.car-item-maintenancer {
  box-shadow: none;
  border-radius: 9px 0 0 9px;
}
.car {
  width: 100%;
}
.car:hover {
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

#image-col {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}
.image-col-maintenancer {
  border-radius: 10px 0px 0px 0px !important;
}
#image-row {
  height: 158px;
  border-radius: 10px 0px 0px 10px;
}
.inform-line {
  display: flex;
  align-items: center;
  margin: 0 0 6px 0;
  font-weight: 300;
}
#brand {
  color: #b10000;
  font-weight: 600;
  margin: 0 0 3px 0;
}
#model {
  font-weight: 600;
  margin: 0 0 7px 0;
  font-size: 20px;
}
#location,
#price,
#seat {
  margin: 0 0 0 7px;
  font-size: 15px;
  font-weight: 400;
}
#edit {
  cursor: pointer;
}
</style>
