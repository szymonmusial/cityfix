export enum DataType {
  users = "setUsers",
  flawReports = "setFlawReports",
}

export const ActionNameToDataType = {
  [DataType.users]: "users",
  [DataType.flawReports]: "flawReports",
};
