<template>
  <div class="router">
    <div class="login-wrapper" v-if="inLogin">
      <div class="login">
        <h1>Login</h1>
        <p v-if="falseLogin" id="error">Incorrect username or password</p>
        <p>Username</p>
        <input type="text" v-model="account" />
        <p>Password</p>
        <input type="text" v-model="password" />
        <button v-on:click="login">Login</button>
      </div>
    </div>
    <maintenancer v-if="this.role == 'maintainer'" v-bind:employeeInfo="employeeInfo" />
    <saler v-if="role == 'sale'" v-bind:employeeInfo="employeeInfo" />
    <manager v-if="role == 'manager'" />
  </div>
</template>

<script>
import Maintenancer from "./Maintenancer.vue";
import Saler from "./Saler.vue";
import Manager from "./Manager.vue";
import axios from "axios";

export default {
  data: function() {
    return {
      account: "",
      password: "",
      role: "",
      inLogin: true,
      falseLogin: false,
      employeeInfo: null
    };
  },
  components: {
    maintenancer: Maintenancer,
    saler: Saler,
    manager: Manager
  },
  methods: {
    login: function() {
      axios({
        method: "POST",
        url: "https://carredo.herokuapp.com/authenticate",
        data: {
          role: "SALE",
          account: this.account,
          password: this.password
        }
      }).then(response => {
        this.employeeInfo = response.data;
        this.role = response.data.role;
        this.$router.push("/saler");
        if (response.data != "") this.inLogin = false;
        else {
          this.falseLogin = true;
          this.account = "";
          this.password = "";
        }
      });
    }
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
  #error {
    color: red;
    position: absolute;
    margin-top: 150px;
    font-size: 16px;
  }
  .login {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 60px;
    }
    p {
      margin-bottom: 5px;
      font-size: 25px;
    }
    input {
      font-family: Montserrat;
      width: 100%;
      font-size: 18px;
      padding: 7px;
    }
    button {
      border-radius: 10px;
      font-weight: 600;
      font-family: Montserrat;
      border-style: none;
      padding: 11px 25px;
      cursor: pointer;
      width: 60%;
      margin: 40px 20%;
    }
  }
}
</style>
