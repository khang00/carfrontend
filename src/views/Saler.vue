<template>
  <div class="saler-wrapper">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>
    <div v-if="navInfo[0].selected" class="pending-request">
      <div
        class="request"
        v-for="pendingRequest in this.pendingRequests"
        v-bind:key="pendingRequest"
      >
        <customer class="customer" v-bind:customer="pendingRequest.renter" />
        <request-car
          class="request-car"
          v-on:approve="reloadPendingRequest"
          v-bind:salerAccount="employeeInfo.account"
          v-bind:contractId="pendingRequest.id"
          v-bind:dayRent="new Date(pendingRequest.dateRent).toLocaleDateString('vn-VN')"
          v-bind:dayReturn="new Date(pendingRequest.dateReturn).toLocaleDateString('vn-VN')"
        />
        <car class="car" v-bind:car="pendingRequest.car" />
      </div>
    </div>
    <div v-if="navInfo[1].selected" class="approve-request">
      <div
        class="approved"
        v-for="approvedRequest in approvedRequests"
        v-bind:key="approvedRequest"
      >
        <customer class="customer" v-bind:customer="approvedRequest.renter" />
        <approve-car
          class="approve-car"
          v-on:payment="reloadApprovedRequest"
          v-bind:salerAccount="employeeInfo.account"
          v-bind:contractId="approvedRequest.id"
          v-bind:dayRent="new Date(approvedRequest.dateRent).toLocaleDateString('vn-VN')"
          v-bind:dayReturn="new Date(approvedRequest.dateReturn).toLocaleDateString('vn-VN')"
        />
        <car v-bind:car="approvedRequest.car" class="car" />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Customer from "./../components/Customer.vue";
import RequestCar from "./../components/Request.vue";
import ApproveCar from "./../components/Approved.vue";
import Car from "./../components/Car.vue";
import axios from "axios";

export default {
  components: {
    "employee-frame": EmployeeFrame,
    car: Car,
    customer: Customer,
    "request-car": RequestCar,
    "approve-car": ApproveCar
  },
  props: {
    employeeInfo: String
  },
  data: function() {
    return {
      pendingRequests: [],
      approvedRequests: [],
      navInfo: [
        {
          title: "Pending Request",
          selected: true
        },
        {
          title: "Approved Request",
          selected: false
        }
      ],
      // employeeInfo: {
      //   name: "Huy Ha",
      //   position: "Manager",
      //   image: ""
      // },
      car: {
        brand: "Huyndai",
        model: "SantaFe",
        seat: "7",
        location: "Ho Chi Minh",
        price: "30000000",
        imageUrls: ["http://35.198.247.39/image/image/?id=4&index=0&type=car"]
      }
    };
  },
  created: function() {
    this.reloadPendingRequest();
    this.reloadApprovedRequest();
  },
  methods: {
    reloadPendingRequest: function() {
      axios({
        method: "GET",
        url: "https://carredo.herokuapp.com/sale/contract/waiting",
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      }).then(response => {
        this.pendingRequests = response.data;
        this.reloadApprovedRequest();
      });
    },
    reloadApprovedRequest: function() {
      axios({
        method: "GET",
        url:
          "https://carredo.herokuapp.com/sale/contract/approvedByAccount?account=" +
          this.employeeInfo.account,
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      }).then(response => {
        this.approvedRequests = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.saler-wrapper {
  width: 80%;
  margin: 0 10%;

  .request {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0;
    .customer {
      width: 30%;
    }
    .request-car {
      width: 20%;
    }
    .car {
      width: 30%;
    }
  }
  .approved {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0;
    .customer {
      width: 30%;
    }
    .approve-car {
      width: 20%;
    }
    .car {
      width: 30%;
    }
  }
}
</style>
