import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WebtoonPage from "../views/WebtoonPage.vue";
import MangaPage from "../views/MangaPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/webtoon",
    name: "webtoon",
    component: WebtoonPage,
  },
  {
    path: "/manga",
    name: "manga",
    component: MangaPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
