import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Media from "./components/Media.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // You dont need the import statement about if use this style
      component: () => import("./views/About.vue")
    },
    {
      path: "/about/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/media",
      name: "media",
      // Requires an import statement above
      component: Media
    }
  ]
});
