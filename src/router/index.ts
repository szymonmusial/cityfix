import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FlawService from "@/views/FlawService.vue";
import FlawReport from "@/views/FlawReport.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/obsluga",
    name: "FlawService",
    component: FlawService,
  },
  {
    path: "/",
    name: "FlawReport",
    component: FlawReport,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
