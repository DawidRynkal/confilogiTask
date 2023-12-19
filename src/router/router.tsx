import { Routes, Route } from "react-router";
import HomePage from "../pages/home-page";
import routerPaths from "./router-paths";
import ErrorPage from "../pages/error-page";

const Router = () => {
  return (
    <Routes>
      <Route path={routerPaths.home} element={<HomePage />} />
      <Route path={routerPaths.pageInProgress} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
