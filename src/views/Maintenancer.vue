<template>
  <div class="maintenancer">
    <h2 class="heading">Caree</h2>
    <div class="employee-tag-wrapper">
      <employee-tag v-bind:employee="employeeInfo"/>
    </div>
    <div class="nav-wrapper">
      <nav-bar v-bind:navInfo="navInfo" />
    </div>
  </div>
</template>

<script>
import EmployeeTag from "./../components/EmployeeTag.vue";
import Nav from "./../components/Nav.vue";
export default {
  components: {
    "employee-tag": EmployeeTag,
    "nav-bar": Nav
  },
  data: function() {
    return {
      navInfo: ["Checking Cars", "Maintain Cars"],
      employeeInfo: {
          name: "Huy Ha",
          position: "Manager"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.maintenancer {
  position: relative;
  width: 80%;
  height: 100%;
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  h2 {
    font-size: 40px;
  }
  .employee-tag-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
  }
  .heading {
    text-align: center;
    font-size: 70px;
    margin: 30px;
  }
  .nav-wrapper {
  }
}
</style>