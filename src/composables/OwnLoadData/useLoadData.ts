import { DataType } from "@/store/modules/loadData/loadDataDictionary";
import store from "@/store/";

export const Load = {
  User: ({ onError }) => store.dispatch("loadData", DataType.users).catch(() => onError()),
  FlawReports: ({ onError }) => store.dispatch("loadData", DataType.flawReports).catch(() => onError()),
  Damage: ({ onError }) => store.dispatch("loadData", DataType.damages).catch(() => onError()),
  InfrastructureElements: ({ onError }) =>
    store.dispatch("loadData", DataType.infrastructureElements).catch(() => onError()),
};
