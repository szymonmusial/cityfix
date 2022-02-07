export type ShowToastFunction = {
  Success: (text: string) => void;
  Info: (text: string) => void;
  Warning: (text: string) => void;
  Error: (text: string) => void;
};
