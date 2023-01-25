import { useContext } from "react";
import Nav from "./components/layout/nav/Nav";
import Contact from "./components/pages/contact/Contact";
import Landing from "./components/pages/landing/Landing";
import Projects from "./components/pages/projects/Projects";
import Skills from "./components/pages/skills/Skills";

import { PortfolioContext } from "./context/PortfolioContext";
import Footer from "./components/layout/Footer";

function App() {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { darkMode } = context;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-screen w-screen overflow-x-hidden sm:text-[18px] scroll-smooth bg-stone-50 dark:bg-gray-800 dark:text-zinc-50">
        <Nav />
        <Landing />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
