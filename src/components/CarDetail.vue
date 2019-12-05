<template>
  <div id="car-detail">
    <div class="car-display">
      <div class="big-image">
        <img v-bind:src="currImage" />
      </div>
      <div class="slide-image">
        <p style="display: none;">{{ imageRun }}</p>
        <button class="side-image-button" v-on:click="backimage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <img
          class="car-thumb"
          v-bind:src="images[0]"
          v-bind:class="classes[0]"
        />
        <img
          class="car-thumb"
          v-bind:src="images[1]"
          v-bind:class="classes[1]"
        />
        <img
          class="car-thumb"
          v-bind:src="images[2]"
          v-bind:class="classes[2]"
        />
        <button class="side-image-button" v-on:click="nextimage">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div class="car-inform">
      <p id="car-model">{{ car.model }}</p>
      <hr/>
      <p id="car-location">
        <strong>Location:</strong>
        {{ car.location }}
      </p>
      <p id="car-brand">
        <strong>Brand:</strong>
        {{ car.brand }}
      </p>
      <p id="car-price">
        <strong>Price:</strong>
        {{ car.price }}
      </p>
      <p id="car-seat">
        <strong>Seats:</strong>
        {{ car.seat }}
      </p>
      <p id="car-description">
        <strong>Description:</strong>
        {{ car.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDetail",
  data: function() {
    return {
      images: [this.car.imageUrl, this.car.imageUrl, this.car.imageUrl],
      classes: ["border", "no-border", "no-border"],

      currImage: "",
      imageRun: 0
    };
  },
  props: {
    car: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    nextimage: function() {
      this.classes[this.imageRun] = "no-border";
      this.imageRun = (this.imageRun + 1) % this.images.length;
      this.currImage = this.images[this.imageRun];
      this.classes[this.imageRun] = "border";
    },
    backimage: function() {
      this.classes[this.imageRun] = "no-border";
      this.imageRun =
        (this.imageRun - 1 + this.images.length) % this.images.length;
      this.currImage = this.images[this.imageRun];
      this.classes[this.imageRun] = "border";
    }
  },
  mounted: function() {
    this.currImage = this.images[0];
  }
};
</script>

<style scoped>
p {
  font-family: Montserrat, serif;
}
#car-detail {
  display: flex;
  width: 100%;
}
.car-display {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.big-image {
  width: 100%;
}
.big-image img {
  width: 100%;
  border-radius: 10px;
}
.slide-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.car-thumb {
  box-sizing: border-box;
  border-radius: 10px;
  width: 25%;
  margin: 1.25%;
}
.border {
  border: solid 3px #ff9200;
}
.side-image-button {
  width: 7.5%;
  height: 90%;
  border: solid 1px grey;
  background: white;
  border-radius: 10px;
  font-size: 20px;
}
hr {
  background: black;
  border: solid 1px black;
}
.car-inform {
  width: 40%;
  padding-left: 4%;
}
.car-inform hr {
  border: solid 2px grey;
  margin-bottom: 40px;
  width: 30%;
  margin-left: 0px;
}
#car-model {
  font-size: 35px;
  font-weight: 700;
  margin: 0 0 10px 0;
}
#car-location,
#car-price,
#car-seat,
#car-brand {
  font-size: 18px;
  margin: 10px 0;
}
#car-description {
  font-size: 18px;
  margin-top: 40px;
}
</style>
