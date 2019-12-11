import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RentCar from "../views/RentCar.vue"
import Maintenancer from "../views/Maintenancer.vue"
import Login from "../views/Login.vue"
import Saler from "../views/Saler.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/RentCar/:carId",
    name: "RentCar",
    component: RentCar
  },
  {
    path: "/Maintenancer",
    name: "Maintenancer",
    component: Maintenancer
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Saler",
    name: "Saler",
    component: Saler
  }
];

const router = new VueRouter({
  routes
});

export default router;
