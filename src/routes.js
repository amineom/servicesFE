import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history", // Use browser history
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/Messages.vue")
    },
    {
      path: "/messages",
      name: "Messagess",
      component: () => import("./components/Messages.vue")
    },
    {
      path: "/messages/:id",
      name: "Message Details",
      component: () => import("./components/Message")
    }
  ]
});

export default router;
