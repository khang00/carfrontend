<template>
  <div class="frame">
    <h2 class="heading">Caree</h2>
    <div class="employee-tag-wrapper">
      <employee-tag v-bind:employee="employeeInfo" />
    </div>
    <div class="nav-wrapper">
      <nav-bar v-bind:navInfo="navInfo" />
    </div>
  </div>
</template>

<script>
import EmployeeTag from "./EmployeeTag.vue";
import Nav from "./Nav.vue";
export default {
  components: {
    "employee-tag": EmployeeTag,
    "nav-bar": Nav
  },
  props: {
    navInfo: Array,
    employeeInfo: Object
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.frame {
  width: 100%;
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
    display: flex;
    justify-content: center;
  }
}
</style>
