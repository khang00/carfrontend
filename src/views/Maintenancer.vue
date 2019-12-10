<template>
  <div class="maintenancer">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>
    <div v-if="navInfo[0].selected" class="checking-cars">
      <p>checkingcars</p>
    </div>
    <div v-if="navInfo[1].selected" class="maintain-cars">
      <p>maintaincars</p>
    </div>
    
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
export default {
  components: {
    "employee-frame": EmployeeFrame
  },
  data: function() {
    return {
      navInfo: [
        {
          title: "Checking Cars",
          selected: true
        },
        {
          title: "Maintain Cars",
          selected: false
        }
      ],
      employeeInfo: {
        name: "Huy Ha",
        position: "Manager",
        image: ""
      },
      a: "a"
    };
  },
  computed: {
    currPage: function() {
      this.navInfo.forEach(page => {
        if(page.selected)
          return page;
      });
      return null;
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>