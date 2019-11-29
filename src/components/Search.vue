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
      fontWeight: "fontWeight: 900"
    };
  },
  methods: {
    searchFocus: function() {
      this.placeHolder = "";
      this.fontWeight = "fontWeight: 100";
    },
    searchFocusOut: function() {
      this.placeHolder = "  Search";

      if (this.input.length > 0) this.fontWeight = "fontWeight: 100";
      else this.fontWeight = "fontWeight: 900";
    }
  },
  mounted: function() {
    var searchInput = document.getElementById("search-input");
    searchInput.value = "";
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
