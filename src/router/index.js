import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RentCar from "../views/RentCar.vue"

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
