import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/common/Header";
import { JobStatus, Home, Submitted, Completed } from "./pages";
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
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/completed" element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
