<template>
  <div class="saler-wrapper">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>

    <div v-if="navInfo[0].selected" class="pending-request">
        <div class="request">
            <customer class="customer"/>
            <request-car class="request-car"/>
            <car v-bind:car="car" class="car"/>
        </div>
    </div>
    <div v-if="navInfo[1].selected" class="approve-request">
        <div class="approved">
            <customer class="customer"/>
            <approve-car class="approve-car"/>
            <car v-bind:car="car" class="car"/>
        </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Customer from "./../components/Customer.vue"
import RequestCar from "./../components/Request.vue"
import ApproveCar from "./../components/Approved.vue"
import Car from "./../components/Car.vue";
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
      },
    };
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