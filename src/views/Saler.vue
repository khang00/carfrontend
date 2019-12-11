<template>
  <div class="saler-wrapper">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>

    <div v-if="navInfo[0].selected" class="pending-request">
        <div class="request">
            
        </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
//import Car from "./../components/Car.vue";
export default {
  components: {
    "employee-frame": EmployeeFrame,
    //car: Car
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
      employeeInfo: {
        name: "Huy Ha",
        position: "Manager",
        image: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>