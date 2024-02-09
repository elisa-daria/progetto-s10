import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EpiMeteoCarousel from "./components/EpiMeteoCarousel";
import EpiMeteoDetail from "./components/EpiMeteoDetail";
import EpiMeteoFooter from "./components/EpiMeteoFooter";
import EpiMeteoNavBar from "./components/EpiMeteoNavBar";
import NotFound from "./components/NotFound";
import WelcomeStatement from "./components/WelcomeStatement";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <EpiMeteoNavBar />
        <WelcomeStatement />
      </header>
      <main className="flex-grow-1 h-100 bg-info-subtle">
        <Routes>
          <Route element={<EpiMeteoCarousel />} path="/" />
          <Route element={<EpiMeteoDetail />} path="/detail/:city" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
      <footer>
        <EpiMeteoFooter />
      </footer>
    </BrowserRouter>
  );
};

export default App;
