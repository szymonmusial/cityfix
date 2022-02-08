import { DataType } from "@/store/modules/loadData/loadDataDictionary";
import store from "@/store/";

export const Load: LoadType = {
  User: ({ onError, onCorrect }) =>
    store
      .dispatch("loadData", DataType.users)
      .catch(() => onError())
      .then(() => onCorrect()),
  FlawReports: ({ onError }) => store.dispatch("loadData", DataType.flawReports).catch(() => onError()),
  Damage: ({ onError }) => store.dispatch("loadData", DataType.damages).catch(() => onError()),
  InfrastructureElements: ({ onError }) =>
    store.dispatch("loadData", DataType.infrastructureElements).catch(() => onError()),
};

type LoadType = {
  User: ({ onError, onCorrect }) => Promise<any>;
  FlawReports: ({ onError: any }) => Promise<any>;
  Damage: ({ onError }: { onError: any }) => Promise<any>;
  InfrastructureElements: ({ onError }: { onError: any }) => Promise<any>;
};

const handling = (operation) => operation();
