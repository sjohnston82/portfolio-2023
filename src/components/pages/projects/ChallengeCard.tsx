import React from "react";
import { challengeData } from "./challengeData";

type ChallengeCardProps = {
  title: string;
  description: string;
  image: string;
  techUsed: string[];
  solutionUrl: string;
  liveUrl: string;
};

const ChallengeCard = ({
  title,
  description,
  image,
  techUsed,
  solutionUrl,
  liveUrl,
}: ChallengeCardProps) => {
  return (
    <>
      <div className="mx-auto flex w-4/5 max-w-[400px] flex-col rounded-lg border shadow-lg  shadow-gray-900">
        <h2 className="py-3 text-center text-2xl">{title}</h2>
        <div className="">
          <img src={image} alt={title} className="px-2 py-2 lg:h-[264px] w-full" />
          <p className="mx-2 rounded bg-jobtrackeraccentdark lg:h-[234px] px-4 py-3">
            {description}
          </p>
        </div>
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-wrap justify-center gap-2 py-2 px-4">
            {techUsed.map((tech, i) => (
              <li
                className="rounded border bg-celticblue px-1 py-1 font-semibold shadow-lg shadow-gray-900"
                key={i}
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex justify-around py-4">
            <a
              href={solutionUrl}
              target="_blank"
              className="rounded-xl border border-celticblue bg-white py-1 px-2 font-bold text-gray-900 shadow-lg shadow-gray-900 hover:bg-celticblue hover:text-zinc-50"
            >
              Solution
            </a>
            <a
              href={liveUrl}
              target="_blank"
              className="rounded-xl border border-celticblue bg-white py-1 px-2 font-bold text-gray-900 shadow-lg shadow-gray-900 hover:bg-celticblue hover:text-zinc-50"
            >
              Live Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;
