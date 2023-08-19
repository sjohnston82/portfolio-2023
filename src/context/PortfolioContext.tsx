import React, { createContext, useState, useEffect } from "react";


import useDebounce from "../components/helpers/hooks/useDebounce";

interface PortfolioContextInterface {
  showingPage: string | null;
  project: number;
  showingGrid: boolean;
  darkMode: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  windowSize: { innerWidth: number; innerHeight: number };
  setWindowSize: React.Dispatch<
    React.SetStateAction<{ innerWidth: number; innerHeight: number }>
  >;
  setShowingGrid: React.Dispatch<React.SetStateAction<boolean>>;
  setProject: React.Dispatch<React.SetStateAction<number>>;
  setShowingPage: React.Dispatch<React.SetStateAction<string>>;
  showingInitialAnimation: boolean;
  setShowingInitialAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  checkForProject: () => { pathname: string } | undefined;
}

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const PortfolioContext = createContext<PortfolioContextInterface | null>(null);

const PortfolioContextProvider = ({ children }: ChildrenProps) => {
  const [showingPage, setShowingPage] = useState("");
  const [project, setProject] = useState<number>(5);
  const [showingGrid, setShowingGrid] = useState(true);
  const [showingInitialAnimation, setShowingInitialAnimation] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [darkMode, setDarkMode] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const checkForProject = () => {
    if (project === null) {
      return { pathname: "/projects" };
    }
  };

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    function handleWindowResize() {
      useDebounce(setWindowSize(getWindowSize()), 200);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        showingGrid,
        setShowingGrid,
        showingPage,
        setShowingPage,
        project,
        setProject,
        showingInitialAnimation,
        setShowingInitialAnimation,
        windowSize,
        setWindowSize,
        checkForProject,
        darkMode,
        setDarkMode,
        isOpen,
        setIsOpen,
        toggleOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioContextProvider };
