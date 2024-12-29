import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { JobStatus } from "./pages/JobStatus";

const Layout = () => {
  return (
    <>
      <Header userType="user" isLogin={false} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
