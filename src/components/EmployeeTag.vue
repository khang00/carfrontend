<template>
  <div id="employee">
    <div id="image">
      <img v-bind:src="employee.image" alt />
    </div>
    <div id="emp-info">
      <p style="color:red">{{ employee.name }}</p>
      <div id="info">
        <h3>{{ employee.role }}</h3>
        <i class="fas fa-chevron-down logout" v-on:click="logout"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Employee",
  props: {
    employee: Object
  },
  methods: {
    logout: function() {
      location.reload();
    }
  }
};
</script>
<style lang="css" scoped>
#employee {
  text-align: center;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  font-family: "Montserrat", serif;
}
#info h3 {
  margin-bottom: 0;
  font-size: 17px;
}
#info {
  padding: 0 8px;
  word-wrap: break-word;
  margin-top: -15px;
}
#emp-info {
  margin-top: -5px;
}
#image {
  border-radius: 50%;
  margin: 0 auto;
}
#image img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
#pos {
  margin-top: 10px;
  text-align: center;
}
.logout{
  cursor: pointer;
}
</style>
