<template>
  <!-- <div id="Navbar">
    <div id="Navbar1">
      <nav>
        <ul>
          <li
            v-bind:key="note.id"
            v-for="note in notes"
            v-bind:class="{ highlight: note.id === selected }"
            v-on:click="selected = note.id"
          >
            {{ note.text }}
          </li>
        </ul>
      </nav>
    </div>
  </div> -->
  <div class="navigation">
    <p
      v-bind:key="note.id"
      v-for="note in notes"
      v-bind:class="{ highlight: note.id === selected }"
      v-on:click="selected = note.id"
    >
      {{ note.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      path: "",
      selected: "",
      notes: [
        { id: "i1", path: "/", text: "First note" },
        { id: "i2", path: "/about", text: "Second note" },
        { id: "i3", path: "/customer", text: "Third note" },
        { id: "i4", path: "/", text: "Fourth note" },
        { id: "i5", path: "/", text: "Fifth note" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.navigation {
  font-family: "Montserrat";
  display: flex;
  width: 70%;
  justify-content: space-between;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  border-radius: 13px;
  padding: 0% 3%;
}
/* #Navbar1 {
  margin-left: -12px;
  padding: 10px;
  width: 100%;
  height: 80px;
  background-color: black;
  text-align: center;
}
li.highlight {
  border-top-style: solid;
  font-weight: bold;
}
ul {
  margin-top: -8px;
}
nav {
  border-radius: 10px;
  width: 90%;
  height: 60px;
  background-color: white;
  margin-left: 5%;
}
nav ul li {
  margin-left: 20px;
  margin-top: 15px;
  padding: 4px;
  float: left;
  list-style: none;
  text-decoration: none;
}
#Navbar {
  font-family: "Montserrat", serif;
} */
</style>
