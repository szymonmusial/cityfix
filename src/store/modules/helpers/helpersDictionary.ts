export enum DataType {
  users = "setUsers",
  flawReports = "setFlawReports",
  damages = "setDamages",
}

export const ActionNameToDataType = {
  [DataType.users]: "users",
  [DataType.flawReports]: "flawReports",
  [DataType.damages]: "damages",
};
