import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { JobStatus } from "./pages/JobStatus";
import { Submitted } from "./pages/Submitted";

export type IHeader = {
  userType: "admin" | "user";
  isLogin: boolean;
};

const ROUTE_USER_TYPES = {
  "/": "admin",
  "/job-status": "admin",
  "/submitted": "user",
} as const;

const DEFAULT_USER_TYPE = "user";

const getUserType = (pathname: string) => {
  return (
    ROUTE_USER_TYPES[pathname as keyof typeof ROUTE_USER_TYPES] ||
    DEFAULT_USER_TYPE
  );
};

const Layout = () => {
  const location = useLocation();
  const userType = getUserType(location.pathname);

  return (
    <>
      <Header userType={userType} isLogin={false} />
      <Outlet />
    </>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/job-status" element={<JobStatus />} />
          <Route path="/submitted" element={<Submitted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
