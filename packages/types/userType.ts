export type IHeader = {
  userType: "admin" | "user";
  isLogin: boolean;
};

export const ROUTE_USER_TYPES = {
  "/": "admin",
  "/job-status": "admin",
  "/submitted": "user",
} as const;

export const DEFAULT_USER_TYPE = "user";
