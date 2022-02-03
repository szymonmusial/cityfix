import store from "../../store";
import { perm } from "./permissionList";

const userPermissions = (): Permissions => store.getters.getPermissions;

const authenticated = (): boolean => store.getters.checkAuth;

const checkPermission = (permission: string): boolean => true;

const canEditStatus = () => checkPermission(perm.canEditStatus);

export { userPermissions, authenticated, checkPermission, canEditStatus };
