import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FlawService from "@/views/FlawService.vue";
import FlawReport from "@/views/FlawReport.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/zglaszanie",
    name: "FlawReport",
    component: FlawReport,
  },
  {
    path: "/",
    name: "FlawService",
    component: FlawService,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
