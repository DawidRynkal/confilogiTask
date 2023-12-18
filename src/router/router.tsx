import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import routerPaths from "./router-paths";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path={routerPaths.home} element={<Home />} />
      <Route path={routerPaths.pageInProgress} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
