<template>
  <div class="nav">
    <p v-bind:style="{ display: 'none' }">{{test}}</p>
    <div class="nav-link" v-for="(link, index) in navInfo" v-bind:key="link.title" v-on:click="onClick(index, link)">
      <p v-if="link.selected">
        <strong>{{link.title}}</strong>
      </p>
      <p v-else>{{link.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navInfo: Array
  },
  data: function() {
    return {
      choose: null,
      currLink: 0,
      test: "a"
    };
  },
  mounted: function() {
    var array = Array(this.navInfo.length);
    array[0] = true;
    this.choose = array;
  },
  methods: {
      onClick: function(index, link) {
          link.selected = true;
          this.navInfo[this.currLink].selected = false;
          this.currLink = index;
      }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  .nav-link {
      width: 180px;
      text-align: center;   
      cursor: pointer;
  }
  p {
    margin: 20px 0px;

  }
}
</style>