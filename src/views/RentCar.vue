<template>
  <div class="rent-car">
    <h2 class="heading" v-on:click="backHome">Caree</h2>
    <div class="search">
      <search />
      <i class="fas fa-sliders-h slider" v-on:click="toggleFilter"></i>
    </div>

    <div id="car-filter">
      <car-filter v-bind:dropBoxes="dropBoxList" />
    </div>

    <div class="car-detail-wrapper">
      <car-detail v-bind:car="currCar" />
    </div>

    <div class="form-car-wrapper">
      <car-form v-bind:formInfo="formInfo" imageSize="15" />
      <div class="button">
        <button id="submit" v-on:click="requestCar">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";
import Form from "../components/Form.vue";
import Search from "../components/Search.vue";
import Filter from "../components/Filter.vue";
import axios from "axios";
export default {
  name: "RentCar",
  components: {
    "car-detail": CarDetail,
    "car-form": Form,
    search: Search,
    "car-filter": Filter
  },
  data: function() {
    return {
      formInfo: {
        text: [
          {
            title: "Name",
            value: ""
          },
          {
            title: "Address",
            value: ""
          },
          {
            title: "Contact number",
            value: ""
          },
          {
            title: "Date of birth",
            value: ""
          },
          {
            title: "Day rent",
            value: ""
          },
          {
            title: "Day return",
            value: ""
          }
        ],
        radio: [
          {
            title: "Gender",
            choice: ["Male", "Female"],
            value: ""
          }
        ],
        image: {
          raw: [null],
          url: [""]
        }
      },
      currCar: null
    };
  },
  computed: {
    dropBoxList: function() {
      return this.$store.getters.getCarAttributes;
    },
    carSearchText: function() {
      return this.$store.getters.getCarSearchText;
    },
    carId: function() {
      return this.$route.params.carId;
    },
    // passCar: function() {
    //   return this.$route.params.car;
    // },
    // currCar: function() {
    //   return this.$route.params.car;
    // }
  },
  created: function() {
    this.currCar = this.$route.params.car;
  },
  methods: {
    requestCar: function() {
      axios({
        method: "POST",
        url: "http://35.198.247.39/CarRentalManagement/renting/car",
        data: {
          car: { id: this.currCar.id },
          renter: {
            name: this.formInfo.text[0].value,
            address: this.formInfo.text[1].value,
            phone: this.formInfo.text[2].value,
            dob: new Date(2018, 11, 24)//this.formInfo.text[3].value
          },
          expectedDate: {
            rent: this.formInfo.text[4].value,
            return: this.formInfo.text[5].value
          }
        },
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {

        let formdata = new FormData();
        let id = new Blob([response.data.id], {
          type: "text/plain"
        });

        let type = new Blob(["user"], {
          type: "text/plain"
        });

        this.formInfo.image.raw.forEach(image => {
          formdata.append("files", image, image.name)
        });
        // for (var i = 0; i < this.apps.length; i++) {
        //   let file = this.apps[i];
        //   formdata.append("files", file, file.name);
        // }
        /* eslint-disable no-console */
        console.log(formdata.getAll("files"));

        formdata.append("id", id);

        console.log(formdata.get("id"));

        formdata.append("type", type);

        console.log(formdata.get("type"));
        axios({
          method: "POST",
          url: "http://35.198.247.39/image/image",
          data: formdata,
          config: {
            headers: {
              // set content type
              "content-type": undefined,
              charset: "utf-8",
              "Access-Control-Allow-Origin": "*"
            }
          }
        })
          .then(response => {
            /* eslint-disable no-console */
            console.log(response);
          })
          .catch(error => {
            /* eslint-disable no-console */
            console.log(error);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.message);
          });
      }).catch(error => {
            /* eslint-disable no-console */
            console.log(error);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.message);
          });;
    },
    toggleFilter: function() {
      var x = document.getElementById("car-filter");
      if (x.style.display == "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
      this.carClones = [];
    },
    backHome: function() {
      this.$router.push("/");
    }
  }

  // created: function() {
  //   this.car = this.getCar(this.$route.params.carId - 1);
  // },
  // beforeRouteUpdate: function(to, from, next) {
  //   this.car = this.getCar(to.params.carId - 1);
  //   next();
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  width: 80%;
  margin: 0 0 40px 0;
  justify-content: center;
  align-items: center;

  .slider {
    transform: scale(1.5, 1.5);
    transition: 300ms;
    margin-left: 5%;

    &:hover {
      cursor: pointer;
    }
  }
}
#car-filter {
  position: relative;
  width: 80%;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
}
.rent-car {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat";

  .car-detail-wrapper {
    width: 80%;
    display: flex;
    margin: 40px 0 40px 0;
  }

  .form-car-wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .heading {
    text-align: center;
    font-size: 70px;
    margin: 30px;
    cursor: pointer;
  }
  .button {
    display: flex;
    margin: 2% 0%;
    width: 100%;
    justify-content: center;

    button {
      padding: 1% 2%;
      border-radius: 10px;
      font-family: Montserrat;
    }

    button#cancel {
      background: white;
      border: solid 1px rgba(0, 0, 0, 0.161);
      color: rgba(0, 0, 0, 0.65);
      font-weight: 600;
      margin: 0 10px;
    }

    button#submit {
      border-style: none;
      padding: 11px 25px;
      font-weight: 600;
      margin: 0 10px;
    }
    button:hover {
      cursor: pointer;
    }
  }
}
</style>
