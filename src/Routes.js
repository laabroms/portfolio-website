import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";

import LandingPage from "./screens/landing/LandingPage";

function Routes() {
  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }
  (function () {
    if (localStorage.getItem("theme") === "darkTheme") {
      setTheme("darkTheme");
    } else {
      setTheme("lightTheme");
    }
  })();

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomeScreen />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;
