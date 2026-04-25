import { useState, useEffect } from "react";
import { GLOBAL_STYLES } from "./styles/globals";

// Components
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WABtn from "./components/WABtn";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AcademyPage from "./pages/AcademyPage";
import HirePage from "./pages/HirePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState("Home");

  const handleSetPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <HomePage setPage={handleSetPage} />;
      case "About":
        return <AboutPage />;
      case "Services":
        return <ServicesPage setPage={handleSetPage} />;
      case "Portfolio":
        return <PortfolioPage />;
      case "Academy":
        return <AcademyPage />;
      case "Hire Us":
        return <HirePage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={handleSetPage} />;
    }
  };

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div className="noise" />
      <Cursor />
      <Nav page={page} setPage={handleSetPage} />
      <main style={{ minHeight: "100vh" }}>
        {renderPage()}
      </main>
      <Footer setPage={handleSetPage} />
      <WABtn />
    </>
  );
}
