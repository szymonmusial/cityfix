import { Role } from "@/infrastructure/permission/permissions";

export type AuthState = {
  login: string;
  password: string;
  role: Role | null;
};
