import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WebtoonPage from "../views/WebtoonPage.vue";
import MangaPage from "../views/MangaPage.vue";
import DetailPage from "../views/DetailPage.vue";

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
  {
    path: "/detail",
    name: "detail",
    component: DetailPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
