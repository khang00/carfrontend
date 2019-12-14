<template>
  <div id="search">
    <input
      v-model="input"
      type="text"
      id="search-input"
      v-bind:placeholder="placeHolder"
      v-bind:style="fontWeight"
      @focus="searchFocus"
      @focusout="searchFocusOut"
      @change="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data: function() {
    return {
      input: "",
      placeHolder: "  Search",
      fontWeight: "fontWeight: 600"
    };
  },
  props: ["inputText"],
  methods: {
    searchFocus: function() {
      this.placeHolder = "";
      this.fontWeight = "fontWeight: 400";
    },
    searchFocusOut: function() {
      this.placeHolder = "  Search";

      if (this.input.length > 0) this.fontWeight = "fontWeight: 400";
      else this.fontWeight = "fontWeight: 600";
    },
    updateInput: function() {
      this.$router.push("/");
      this.$store.commit("setCarSearchText", this.input);
    }
  },
  mounted: function() {
    // var searchInput = document.getElementById("search-input");
    // searchInput.value = "";
    this.input = this.$store.getters.getCarSearchText;
    if (this.input != "") {
      this.searchFocus();
    }
  }
};
</script>

<style scoped>
#search {
  width: 40%;
}
#search-input {
  width: 100%;
  border-radius: 20px;
  border: none;
  padding: 12px 15px;
  font-family: Montserrat, "Font Awesome 5 Free";
  font-weight: 400;
  background: #f2f2f2;
}
</style>
