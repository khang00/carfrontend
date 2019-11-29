import Vue from "vue";
import VueRouter from "vue-router";
import ViewCar from "../views/ViewCar.vue";
import Car from "../views/Car.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search
  },
  {
    path: "/ViewCar",
    name: "ViewCar",
    component: ViewCar
  },
  {
    path: "/Car",
    name: "Car",
    component: Car
  }
];

const router = new VueRouter({
  routes
});

export default router;
