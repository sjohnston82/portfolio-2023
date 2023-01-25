import React from "react";

interface TechBadgeProps {
  image: string;
  title: string;
  smallText?: boolean;
}

const TechBadge = ({ image, title, smallText }: TechBadgeProps) => {
  return (
    <div className="z-10 flex h-20 w-20 flex-col flex-wrap items-center justify-center rounded-xl border bg-white transition-all duration-200 hover:scale-105 hover:shadow-lg dark:bg-gray-900 xxs:h-24 xxs:w-24">
      <img
        className={
          smallText
            ? "h-10 w-10 xxs:h-14 xxs:w-14"
            : "h-12 w-12 p-1 xxs:h-16 xxs:w-16"
        }
        src={image}
        alt={title}
      />
      <p
        className={
          smallText
            ? "text-center text-xs font-light"
            : "text-center  text-sm font-light"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default TechBadge;
