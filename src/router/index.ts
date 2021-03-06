import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FlawService from "@/views/FlawService.vue";
import FlawReportMap from "@/views/FlawReportMap.vue";
import FlawReportTable from "@/views/FlawReportTable.vue";
import FlawReportForm from "@/views/FlawReportForm.vue";
import LogIn from "@/views/LogIn.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/zglaszanie/formularz",
    name: "FlawReportForm",
    component: FlawReportForm,
  },
  {
    path: "/zglaszanie/mapa",
    name: "FlawReportMap",
    component: FlawReportMap,
  },
  {
    path: "/zglaszanie/tabela",
    name: "FlawReportTable",
    component: FlawReportTable,
  },
  {
    path: "/obsluga",
    name: "FlawService",
    component: FlawService,
  },
  {
    path: "/zaloguj",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
