import { DataType } from "@/store/modules/loadData/loadDataDictionary";
import store from "@/store/";

export const Load = {
  User: (onError) =>
    store.dispatch("loadData", DataType.users).catch(() => {
      onError();
    }),
  FlawReports: () => store.dispatch("loadData", DataType.flawReports),
  Damage: () => store.dispatch("loadData", DataType.damages),
  InfrastructureElements: () => store.dispatch("loadData", DataType.infrastructureElements),
};
