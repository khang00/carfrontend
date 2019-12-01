import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCar from "../views/AddCar.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AddCar",
    name: "AddCar",
    component: AddCar
  }
];

const router = new VueRouter({
  routes
});

export default router;
