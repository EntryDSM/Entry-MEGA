import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { JobStatus } from "./pages/JobStatus";
import { Submitted } from "./pages/Submitted";
import { Layout } from "./components/Layout";

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
