import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/util/index";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Index from "./components/Index/Index";
import HtmlCss from "./components/Work/HtmlCss";
import HtmlCssJs from "./components/Work/HtmlCssJs";
import ReactProj from "./components/Work/ReactProj";
import { Route, Routes } from "react-router-dom";
import BootrapProjects from "./components/Work/BootrapProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import useLocalStorage from "use-local-storage";

AOS.init();

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="App">
      <NavBar theme={theme} switchTheme={switchTheme} />
      <Routes>
        <Route path="/" element={<Index theme={theme} />} />
        <Route path="/htmlCssprojects" element={<HtmlCss theme={theme} />} />
        <Route path="/htmlCssJsprojects" element={<HtmlCssJs theme={theme} />} />
        <Route path="/reactprojects" element={<ReactProj theme={theme} />} />
        <Route path="/bootrapprojects" element={<BootrapProjects theme={theme} />} />
        <Route />
        <Route />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
