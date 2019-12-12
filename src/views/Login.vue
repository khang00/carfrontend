<template>
  <div class="router">
    <div class="login-wrapper" v-if="inLogin">
      <div class="login">
        <h1>Login</h1>
        <p>Username</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <button>Login</button>
      </div>
    </div>
  
    <maintenancer v-if="role == 'maintenancer'"/>
    <saler v-if="role == 'saler'"/>
    <manager v-if="role == 'manager'"/>
    
  </div>
</template>

<script>
import Maintenancer from "./Maintenancer.vue"
export default {
  data: function() {
    return {
      username: "",
      password: "",
      role: "",
    };
  },
  components: {
    maintenancer: Maintenancer
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 60px;
    }
    p {
      margin-bottom: 5px;
      font-size: 18px;
    }
    input {
      font-family: Montserrat;
    }
    button {
      border-radius: 10px;
      font-weight: 600;
      font-family: Montserrat;
      border-style: none;
      padding: 11px 25px;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}
</style>