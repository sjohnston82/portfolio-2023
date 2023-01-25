import React, { useContext } from "react";
import { PortfolioContext } from '../../../context/PortfolioContext';
import { motion, Variants } from 'framer-motion'

interface NavLinkProps {
  title: string;
  icon: JSX.Element;
  link: string;
  variants: Variants;
}

const NavLink = ({ title, icon, link, variants }: NavLinkProps) => {

  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { toggleOpen } = context;
  return (
    <motion.li
      variants={variants}
      className="flex w-full justify-center text-2xl hover:scale-105"
    >
      <a href={link} className="flex gap-x-2 " onClick={() => toggleOpen()}>
        <div className="group flex w-28 justify-start gap-1 hover:scale-105">
          <span className="flex items-center fill-black dark:fill-zinc-50">
            {icon}
          </span>
          <p className="">{title}</p>
        </div>
      </a>
    </motion.li>
  );
};

export default NavLink;
