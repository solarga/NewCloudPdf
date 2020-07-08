import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Convert from '../views/Convert'
import Regist from '../views/Regist'
import ForgetPass from "../views/ForgetPass"
import Login from "../views/Login"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: "/Convert",
    name: "Convert",
    component: Convert
  }, {
    path: "/Regist",
    name: "Regist",
    component: Regist
  }, {
    path: "/ForgetPass",
    name: "ForgetPass",
    component: ForgetPass
  }, {
    path: "/Login",
    name: "Login",
    component: Login
  }

]

const router = new VueRouter({
  mode: "history", routes
})

export default router
