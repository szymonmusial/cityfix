import { DataType } from "@/store/modules/loadData/loadDataDictionary";
import store from "@/store/";

export const Load: LoadType = {
  User: ({ onError, onCorrect, onFinally }) =>
    handle(() => store.dispatch("loadData", DataType.users), { onError, onCorrect, onFinally }),
  FlawReports: ({ onError, onCorrect, onFinally }) =>
    handle(() => store.dispatch("loadData", DataType.flawReports), { onError, onCorrect, onFinally }),
  Damage: ({ onError, onCorrect, onFinally }) =>
    handle(() => store.dispatch("loadData", DataType.damages), { onError, onCorrect, onFinally }),
  InfrastructureElements: ({ onError, onCorrect, onFinally }) =>
    handle(() => store.dispatch("loadData", DataType.infrastructureElements), { onError, onCorrect, onFinally }),
};

type LoadType = {
  User: LoadMethod;
  FlawReports: LoadMethod;
  Damage: LoadMethod;
  InfrastructureElements: LoadMethod;
};

type LoadMethod = ({ onError, onCorrect, onFinally }: LoadParm) => Promise<any>;

type LoadParm = {
  onError?: () => void;
  onCorrect?: () => void;
  onFinally?: () => void;
};

const handle = (operation: () => Promise<any>, { onError = () => {}, onCorrect = () => {}, onFinally = () => {} }) => {
  return operation()
    .then(() => onCorrect())
    .catch(() => onError())
    .finally(() => onFinally());
};
