import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/common/Header";
import {
  JobStatus,
  Main,
  Submitted,
  Completed,
  ApplicationWriting,
  CreateSupport,
  EditSupport,
} from "./pages";
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
          <Route index element={<Main />} />
          <Route path="/admin/job-status" element={<JobStatus />} />
          <Route path="/user/submitted" element={<Submitted />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/application-writing" element={<ApplicationWriting />} />
          <Route path="/create-support" element={<CreateSupport />} />
          <Route path="/edit-support" element={<EditSupport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
