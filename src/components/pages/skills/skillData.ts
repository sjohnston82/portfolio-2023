import HTMLBadgeImage from "../../../styles/assets/images/HTMLBadgeImage.png";
import CSSBadgeImage from "../../../styles/assets/images/CSSBadgeImage.png";
import JavascriptBadgeImage from "../../../styles/assets/images/JavascriptBadgeImage.svg";
import TypescriptBadgeImage from "../../../styles/assets/images/TypescriptBadgeImage.png";
import SQLBadgeImage from "../../../styles/assets/images/SQLBadgeImage.svg";
import PythonBadgeImage from "../../../styles/assets/images/PythonBadgeImage.png";

import ReactBadgeImage from "../../../styles/assets/images/ReactBadgeImage.png";
import SassBadgeImage from "../../../styles/assets/images/SassBadgeImage.png";
import VueBadgeImage from "../../../styles/assets/images/VueBadgeImage.png";
import TailwindBadgeImage from "../../../styles/assets/images/TailwindBadgeImage.png";
import NextjsBadgeImage from "../../../styles/assets/images/NextjsBadgeImage.png";

import GitBadgeImage from "../../../styles/assets/images/GitBadgeImage.jpg";
import ResponsiveDesignBadgeImage from "../../../styles/assets/images/ResponsiveDesignBadgeImage.png";
import AWSBadgeImage from "../../../styles/assets/images/AWSBadgeImage.png";
import VeteranBadgeImage from "../../../styles/assets/images/VeteranBadgeImage.png";

import ExpressBadgeImage from "../../../styles/assets/images/ExpressBadgeImage.jpg";
import MongoDBBadgeImage from "../../../styles/assets/images/MongoDBBadgeImage.svg";
import NodejsBadgeImage from "../../../styles/assets/images/NodejsBadgeImage.png";
import PrismaBadgeImage from "../../../styles/assets/images/PrismaBadgeImage.png";
import TrpcBadgeImage from "../../../styles/assets/images/TrpcBadgeImage.svg";
import RESTAPIBadgeImage from "../../../styles/assets/images/RESTAPIBadgeImage.png";

export interface SkillGroup {
  title: string;
  image: string;
  smallText?: boolean;
}

export const allLanguages: SkillGroup[] = [
  {
    image: HTMLBadgeImage,
    title: "HTML",
  },
  {
    image: CSSBadgeImage,
    title: "CSS",
  },
  {
    image: JavascriptBadgeImage,
    title: "JavaScript",
  },
  {
    image: TypescriptBadgeImage,
    title: "TypeScript",
  },
  {
    image: SQLBadgeImage,
    title: "SQL",
  },
  {
    image: PythonBadgeImage,
    title: "Python",
  },
];

export const allFrontEnd: SkillGroup[] = [
  {
    image: ReactBadgeImage,
    title: "React",
  },
  {
    image: SassBadgeImage,
    title: "Sass",
  },
  {
    image: VueBadgeImage,
    title: "Vue",
  },
  {
    image: TailwindBadgeImage,
    title: "Tailwind",
  },
  { image: NextjsBadgeImage, title: "NextJs" },
];

export const allBackEnd: SkillGroup[] = [
  {
    image: ExpressBadgeImage,
    title: "Express",
  },
  {
    image: MongoDBBadgeImage,
    title: "MongoDB",
  },
  {
    image: NodejsBadgeImage,
    title: "Nodejs",
  },
  {
    image: PrismaBadgeImage,
    title: "Prisma",
  },
  {
    image: TrpcBadgeImage,
    title: "trpc",
  },
  {
    image: RESTAPIBadgeImage,
    title: "REST APIs",
  },
];

export const allMiscSkills: SkillGroup[] = [
  {
    image: AWSBadgeImage,
    title: "AWS",
  },
  {
    image: GitBadgeImage,
    title: "Version Control",
    smallText: true,
  },
  {
    image: ResponsiveDesignBadgeImage,
    title: "Responsive Design",
    smallText: true,
  },
  {
    image: VeteranBadgeImage,
    title: "Veteran",
  },
];

export const thingsILove: SkillGroup[] = [
  {
    image: JavascriptBadgeImage,
    title: "JavaScript",
  },
  {
    image: ReactBadgeImage,
    title: "React",
  },
];
