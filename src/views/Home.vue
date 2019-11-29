<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  props: ["text"]
};
</script>
