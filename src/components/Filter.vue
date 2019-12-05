<template>
  <div class="filter-item">
    <div class="filter-wrapper">
      <h2>Filter</h2>
      <div class="select">
        <select v-for="dropBox in dropBoxes" v-model="dropBox.selected" v-bind:key="dropBox.title">
          <option disabled value>{{dropBox.title}}</option>
          <option
            v-bind:key="option"
            v-bind:value="option"
            v-for="option in dropBox.options"
          >{{option}}</option>
        </select>
      </div>
      <form action class="choose">
        <div v-for="title in checkBoxes" v-bind:key="title">
          <input type="checkbox" v-bind:value="title" />
          {{title}}
        </div>
      </form>
    </div>

    <div class="button">
      <button id="submit" v-on:click="filter">Filter</button>
      <button id="cancel" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarFilter",
  data: function() {
    return {};
  },
  props: ["dropBoxes", "checkBoxes"],
  methods: {
    filter: function() {
      var filterOutput = {};
      this.dropBoxes.forEach(dropBox => {
        filterOutput[dropBox.title] = dropBox.selected;
      });
      this.$router.push("/");
      this.$store.commit("setCarFilterRule", filterOutput);
    },
    cancel: function() {
      var filterOutput = {};
      this.dropBoxes.forEach(dropBox => {
        dropBox.selected = "";
        filterOutput[dropBox.title] = "";
      });
      this.$store.commit("setCarFilterRule", filterOutput);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
h2,
button,
option,
input,
select {
  font-family: "Montserrat";
}
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
.filter-item {
  border-radius: 13px;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 3vw;
}
.filter-wrapper {
  width: 80%;
}
.filter-item h2 {
  text-align: left;
  margin: 0 0 20px 0;
  font-size: 30px;
}

.filter-item .select {
  text-align: left;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 4vw;
  grid-row-gap: 20px;
}

.filter-item select {
  border: 0px;
  border-bottom: solid 1.8px rgba(0, 0, 0, 0.161);
  padding-top: 2.5%;
  font-size: 15px;
}
.select {
  margin-bottom: 30px;
}
.button {
  width: 20%;
  height: 100%;
}
.filter-item .button {
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}

.filter-item .button button {
  border-radius: 10px;
  padding: 10px 20px;
  transition: 300ms;
  font-weight: 600;
}

button#cancel {
  background: white;
  border: solid 1px rgba(0, 0, 0, 0.161);
  margin-top: -2%;
  color: rgba(0, 0, 0, 0.65);
}

button#submit {
  border-style: none;
  padding: 11px 25px;
  margin-bottom: 20px;
}

button:hover {
  cursor: pointer;
}

.choose {
  text-align: left;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 4vw;
  grid-row-gap: 20px;
}
</style>
