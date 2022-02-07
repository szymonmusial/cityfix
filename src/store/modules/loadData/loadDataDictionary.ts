export enum DataType {
  users = "setUsers",
  flawReports = "setFlawReports",
  damages = "setDamages",
  infrastructureElements = "setInfrastructureElements",
}

export const ActionNameToDataType = {
  [DataType.users]: "users",
  [DataType.flawReports]: "flawReports",
  [DataType.damages]: "damages",
  [DataType.infrastructureElements]: "infrastructureElements",
};
