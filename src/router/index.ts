import {createRouter, createWebHistory} from "vue-router"
import Home from "@/pages/home/Index.vue"
import Popup from "@/pages/popup/Index.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/popup",
      name: "Popup",
      component: Popup
    }
  ]
})
