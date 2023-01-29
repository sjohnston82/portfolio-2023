import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import SocialMediaButtonGroup from "./SocialMediaButtonGroup";

const Footer = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { setProject } = context;

  let footerClasses: string = "w-full p-1 text-gray-500 z-0 bg-gray-800 mb-3";

  return (
    <footer className={footerClasses}>
      <SocialMediaButtonGroup isFooter={true} />
      <p className="text-center text-sm ">
        © Stephen Johnston, 2023. All Rights Reserved.
      </p>
      <ul className="flex justify-center gap-x-5 ">
        <a href="#home">
          <li className="text-sm  hover:underline">About</li>
        </a>
        <a href="#skills">
          <li className="text-sm  hover:underline">Skills</li>
        </a>
        <a href="#projects">
          <li
            className="text-sm  hover:underline"
            onClick={() => setProject(1)}
          >
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="text-sm  hover:underline">Contact</li>
        </a>
        <a
          href="https://res.cloudinary.com/sjohnston82/image/upload/v1670276349/u9bipgajsof2jw79tv4c.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="text-sm  hover:underline">Resume</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
