<template>
  <div class="manager-wrapper">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>

    <div v-if="navInfo[0].selected" class="cars">
      <car v-for="car in cars" v-bind:key="car" v-bind:car="car" role="admin" />
    </div>
    <div v-if="navInfo[1].selected" class="activities"></div>
    <div v-if="navInfo[2].selected" class="add">
      <input-form class="form" v-bind:formInfo="ownerForm" title="Owner" imageSize="15" />
      <input-form class="form" v-bind:formInfo="carForm" title="Car" />
      <div class="button">
        <button id="approve" v-on:click="addCar">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Form from "./../components/Form.vue";
import Car from "./../components/Car.vue";
import axios from "axios";

export default {
  components: {
    "employee-frame": EmployeeFrame,
    "input-form": Form,
    car: Car
  },
  data: function() {
    return {
      navInfo: [
        {
          title: "Cars",
          selected: true
        },
        {
          title: "",
          selected: false
        },
        {
          title: "",
          selected: false
        }
      ],
      employeeInfo: {
        name: "Huy Ha",
        position: "Manager",
        image: ""
      },
      ownerForm: {
        text: [
          {
            title: "Name",
            value: ""
          },
          {
            title: "Contact Number",
            value: ""
          },
          {
            title: "Address",
            value: ""
          },
          {
            title: "Date of Birth",
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
      carForm: {
        text: [
          {
            title: "Brand",
            value: ""
          },
          {
            title: "Model",
            value: ""
          },
          {
            title: "Color",
            value: ""
          },
          {
            title: "Price",
            value: ""
          },
          {
            title: "Location",
            value: ""
          },
          {
            title: "Seat",
            value: ""
          },
          {
            title: "Description",
            value: ""
          }
        ],
        image: {
          raw: [null, null, null],
          url: ["", "", ""]
        }
      },
      cars: []
    };
  },
  created: function() {
    this.reloadCar();
  },
  methods: {
    reloadCar: function() {
      axios({
        method: "GET",
        url: "https://carredo.herokuapp.com/manager/car",
        data: {},
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8"
          }
        }
      }).then(response => {
        /*eslint-disable no-console*/
        console.log(response.data);
        this.cars = response.data;
      });
    },
    goEdit: function(id, car) {
      this.$router.push({ name: "EditCar", params: { carId: id, car: car } });
    },
    addCar: function() {
      console.log("IN");
      var owner =  {
            name: this.ownerForm.text[0].value,
            phone: this.ownerForm.text[1].value,
            address: this.ownerForm.text[2].value,
            dob: this.ownerForm.text[3].value,
            gender: this.ownerForm.radio[0].value,
            totalImage: 1
          };
      var car = {
            model: this.carForm.text[1].value,
            brand: this.carForm.text[0].value,
            color: this.carForm.text[2].value,
            price: this.carForm.text[3].value,
            location: this.carForm.text[4].value,
            seat: this.carForm.text[5].value,
            totalImage: 3,
            description: this.carForm.text[6].value
          }
        console.log(owner);
        console.log(car);
      axios({
        method: "POST",
        url: "https://carredo.herokuapp.com/manager/car",
        data: {
          car: {
            model: this.carForm.text[1].value,
            brand: this.carForm.text[0].value,
            color: this.carForm.text[2].value,
            price: this.carForm.text[3].value,
            location: this.carForm.text[4].value,
            seat: this.carForm.text[5].value,
            totalImage: 3,
            description: this.carForm.text[6].value
          },
          onwer: {
            name: this.ownerForm.text[0].value,
            phone: this.ownerForm.text[1].value,
            address: this.ownerForm.text[2].value,
            dob: this.ownerForm.text[3].value,
            gender: this.ownerForm.radio[0].value,
            totalImage: 1
          },
        },
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      }).then(response => {
        /*eslint-disable no-console*/
        // let responeCar = response.data;

        // let formdata = new FormData();
        // let id = new Blob([responeCar.id], {
        //   type: "text/plain"
        // });

        // for(var i = 0)
        console.log("OK");

        let formdataUser = new FormData();
        let idUser = new Blob([response.data.id], {
          type: "text/plain"
        });

        let typeUser = new Blob(["user"], {
          type: "text/plain"
        });

        this.ownerForm.image.raw.forEach(image => {
          formdataUser.append("files", image, image.name);
        });




        let formdataCar = new FormData();
        let idCar = new Blob([response.data.id], {
          type: "text/plain"
        });

        let typeCar = new Blob(["car"], {
          type: "text/plain"
        });

        this.carForm.image.raw.forEach(image => {
          formdataCar.append("files", image, image.name);
        });
        // for (var i = 0; i < this.apps.length; i++) {
        //   let file = this.apps[i];
        //   formdata.append("files", file, file.name);
        // }
        /* eslint-disable no-console */

        formdataUser.append("id", idUser);
        formdataUser.append("type", typeUser);

        formdataCar.append("id", idCar);
        formdataCar.append("type", typeCar);


        axios({
          method: "POST",
          url: "https://carredo.herokuapp.com/image/image",
          data: formdataUser,
          config: {
            headers: {
              // set content type
              "content-type": undefined,
              charset: "utf-8",
              "Access-Control-Allow-Origin": "*"
            }
          }
        }).then(response => {
          /*eslint-disable no-console*/
          console.log(response.data);
          console.log("ok");
        });

        axios({
          method: "POST",
          url: "https://carredo.herokuapp.com/image/image",
          data: formdataCar,
          config: {
            headers: {
              // set content type
              "content-type": undefined,
              charset: "utf-8",
              "Access-Control-Allow-Origin": "*"
            }
          }
        }).then(response => {
          /*eslint-disable no-console*/
          console.log(response.data);
          console.log("ok");
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.manager-wrapper {
  width: 80%;
  margin: 0 10%;
  .form {
    margin: 80px 0;
  }
  .button {
    button {
      margin: 15px 10px 0 10px;
    }
    #approve {
      border-style: none;
      padding: 11px 25px;
      font-weight: 600;
      border-radius: 10px;
      font-family: Montserrat;
      background: rgba(0, 0, 0, 0.091);
      text-align: center;
    }
    #cancel {
      border: solid 1px rgba(0, 0, 0, 0.161);

      padding: 11px 25px;
      font-weight: 600;
      border-radius: 10px;
      font-family: Montserrat;
      background: white;
      text-align: center;
      color: black;
    }
    text-align: center;
  }
  .cars {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    margin-bottom: 5%;
    width: 100%;
    margin: 40px 0 0 0;
  }
}
</style>
