<template>
  <div class="maintenancer">
    {{checkingCars}}
    {{maintainCars}}
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>

    <div v-if="navInfo[0].selected" class="checking-cars">
      <div class="checking-car" v-for="checkingCar in checkingCars" v-bind:key="checkingCar">
        <div class="car-wrapper">
          <car v-bind:car="checkingCar.car" role="maintenancer" />
        </div>
        <div class="color-column"></div>
        <div class="form">
          <div class="form-input">
            <div class="form-row">
              <p>Checking Details</p>
              <textarea v-model="checkingCar.checkingDetail" rows="4"></textarea>
            </div>
            <div class="form-row">
              <p>Expected Cost</p>
              <input type="text" v-model="checkingCar.fine" />
            </div>
          </div>
          <button
            v-on:click="completeChecking(checkingCar.id, checkingCar.checkingDetail, checkingCar.fine)"
          >Complete</button>
        </div>
      </div>
    </div>

    <div v-if="navInfo[1].selected" class="maintain-cars">
      <div class="maintain-car" v-for="maintainCar in maintainCars" v-bind:key="maintainCar">
        <div class="car-wrapper">
          <car v-bind:car="maintainCar.car" role="maintenancer" />
        </div>
        <div class="color-column"></div>
        <div class="form">
          <div class="form-input">
            <div class="form-row">
              <h2>Maintain Details</h2>
              <div class="detail-text">
                <textarea v-model="maintainCar.detail" rows="4"></textarea>
              </div>
            </div>
            <div class="form-row">
              <h2>Fee</h2>
              <input type="text" v-model="maintainCar.fee" />
            </div>
          </div>
          <button v-on:click="completeMaintain(maintainCar.id, maintainCar.detail, maintainCar.fee)">Complete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Car from "./../components/Car.vue";
import axios from "axios";

export default {
  components: {
    "employee-frame": EmployeeFrame,
    car: Car
  },
  props: {
    employeeInfo: String
  },
  data: function() {
    return {
      detail: "",
      car: {
        brand: "Huyndai",
        model: "SantaFe",
        seat: "7",
        location: "Ho Chi Minh",
        price: "30000000",
        imageUrls: ["http://35.198.247.39/image/image/?id=4&index=0&type=car"]
      },
      navInfo: [
        {
          title: "Checking Cars",
          selected: true
        },
        {
          title: "Maintaining Cars",
          selected: false
        }
      ],
      checkingCars: [],
      maintainCars: []
    };
  },
  computed: {
    currPage: function() {
      this.navInfo.forEach(page => {
        if (page.selected) return page;
      });
      return null;
    }
  },
  methods: {
    completeChecking: function(inputContractId, inputDetail, inputFine) {
      axios({
        method: "PUT",
        url:
          "https://carredo.herokuapp.com/maintainer/contract/finished",
        data: {
          contractId: inputContractId,
          detail: inputDetail,
          fine: inputFine
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
        console.log(response.data);
        this.reloadCheckingCar();
        this.reloadMaintainCar();
      });
    },
    completeMaintain: function(inputContractId, inputDetail, inputFine) {
      axios({
        method: "PUT",
        url:
          "https://carredo.herokuapp.com/maintainer/maintenance/finished",
        data: {
          contractId: inputContractId,
          detail: inputDetail,
          fine: inputFine
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
        console.log(response.data);
        this.reloadMaintainCar();
      });
    },
    reloadCheckingCar: function() {
      axios({
        method: "GET",
        url:
          "https://carredo.herokuapp.com/maintainer/contract?account=" +
          this.employeeInfo.account,
        data: {},
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
        console.log(response.data);
        this.checkingCars = response.data;
      });
    },
    reloadMaintainCar: function() {
      axios({
        method: "GET",
        url:
          "https://carredo.herokuapp.com/maintainer/maintenance?account=" +
          this.employeeInfo.account,
        data: {},
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
        console.log(response.data);
        this.maintainCars = response.data;
      });
    }
  },
  created: function() {
    this.reloadCheckingCar();
    this.reloadMaintainCar();
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
.maintenancer {
  position: relative;
  width: 80%;
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  .employee-frame-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
  }
  .title {
    font-size: 40px;
  }
  .maintain-car {
    display: flex;
    width: 100%;
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
    margin: 40px 0;
    border-radius: 10px;
    .car-wrapper {
      width: 33%;
    }
    .color-column {
      width: 8%;
      background: #d3a033;
    }
    .form {
      width: 59%;
      padding: 3vw;
      height: 100%;
      .form-row {
        margin-bottom: 30px;
      }
      button {
        border-style: none;
        padding: 11px 25px;
        font-weight: 600;
        margin: 0 10px;
        border-radius: 10px;
        font-family: Montserrat;
        background: #44c26a;
        text-align: center;
        color: white;
        position: relative;
        bottom: 0;
      }
      h2 {
        margin: 0 0 10px 0;
        font-weight: bold;
        font-size: 20px;
      }
      .detail-text {
        font-size: 15px;
        font-weight: 400;
        height: 120px;
      }
      input {
        font-family: montserrat;
        border: solid 1px black;
        border-left: 0px;
        border-right: 0px;
        border-top: 0px;
        font-size: 15px;
      }
      textarea {
        font-family: montserrat;
        width: 96%;
        border: solid 1px black;
        padding: 10px;
        resize: none;
      }
    }
  }
  .checking-car {
    display: flex;
    width: 100%;
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
    margin: 40px 0;
    border-radius: 10px;
    .car-wrapper {
      width: 33%;
    }
    .color-column {
      width: 8%;
      background: #d33333;
    }
    .form {
      width: 59%;
      padding: 3vw;
      height: 100%;
      .form-row {
        margin-bottom: 30px;
      }
      button {
        border-style: none;
        padding: 11px 25px;
        font-weight: 600;
        margin: 0 10px;
        border-radius: 10px;
        font-family: Montserrat;
        background: #44c26a;
        text-align: center;
        color: white;
        position: relative;
        bottom: 0;
      }
      p {
        margin: 0 0 10px 0;
        font-weight: bold;
        font-size: 20px;
      }
      input {
        font-family: montserrat;
        border: solid 1px black;
        border-left: 0px;
        border-right: 0px;
        border-top: 0px;
        font-size: 15px;
      }
      textarea {
        font-family: montserrat;
        width: 96%;
        border: solid 1px black;
        font-size: 15px;
        padding: 10px;
        resize: none;
      }
    }
  }
}
</style>
