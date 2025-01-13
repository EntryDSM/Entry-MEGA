import {
  ROUTE_USER_TYPES,
  DEFAULT_USER_TYPE,
} from "../../../../packages/types/userType";
import { useLocation, Outlet } from "react-router-dom";
import { Header } from "./common/Header";

const getUserType = (pathname: string) => {
  return (
    ROUTE_USER_TYPES[pathname as keyof typeof ROUTE_USER_TYPES] ||
    DEFAULT_USER_TYPE
  );
};

export const Layout = () => {
  const location = useLocation();
  const userType = getUserType(location.pathname);

  return (
    <>
      <Header userType={userType} isLogin={false} />
      <Outlet />
    </>
  );
};
