import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorView from "../views/AuthorView.vue";
import store from '../store'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/authors",
    name: "authors",
    component: AuthorView,
  },

  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../views/post/_id.vue"),
  },

  {
    path: '/author/:id',
    name: 'author',
    component: () => import("../views/author/_id.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


// if you press on a sidebar button that has a router to direct you to 
// a certain page, after pressing, remove the opened sidebar and return to beginning of page
router.afterEach((to, from) => {
  // to and from are both route objects.
  if (from.name) {
    document.documentElement.scrollTop = 0
    store.dispatch('CloseMenu')
  }
})

export default router;
