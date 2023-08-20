import MultiStepFormImage from "../../../styles/assets/images/multistepform.webp";
import NewsHomepageImage from "../../../styles/assets/images/news-homepage.webp";
import AgeCalculatorImage from "../../../styles/assets/images/agecalculator.webp";
import ResultSummaryImage from "../../../styles/assets/images/result-summary-component.webp";
import NewsletterSignupImage from "../../../styles/assets/images/newsletter-signup.webp";

type Challenge = {
  title: string;
  description: string;
  image: string;
  solutionUrl: string;
  liveUrl: string;
  techUsed?: string[];
};

export const challengeData = [
  {
    title: "Multi-step Form",
    description:
      "This is a multi-step form with four different steps.  It requires form validation, responsive design and persisting state through each step of the form.",
    image: MultiStepFormImage,
    solutionUrl: "https://github.com/sjohnston82/multi-step-form",
    liveUrl: "https://resonant-smakager-c18e18.netlify.app",
    techUsed: [
      "NextJS",
      "Styled Components",
      "Zod",
      "React-hook-form",
      "HTML",
      "Typescript",
    ],
  },
  {
    title: "News Homepage",
    description:
      "This challenge was a take a complex news homepage and recreate a pixel-perfect copy of it.  ",
    image: NewsHomepageImage,
    solutionUrl: "https://github.com/sjohnston82/news-homepage",
    liveUrl: "https://storied-biscochitos-f7a7c1.netlify.app/",
    techUsed: [
      "NextJs",
      "TailwindCSS",
      "Flexbox",
      "Framer-motion",
      "HTML",
      "Typescript",
    ],
  },
  {
    title: "Age Calculator",
    description:
      "This is an app where a user can enter any date and find out how long has transpired since that date.  It required date validation to ensure dates are not in the future or do not exist, and takes into account leap years.",
    image: AgeCalculatorImage,
    solutionUrl: "https://github.com/sjohnston82/age-calculator",
    liveUrl: "https://age-calculator-ahgr72pm8-sjohnston82.vercel.app/",
    techUsed: ["NextJs", "React-hook-form", "Zod", "TailwindCSS", "Typescript"],
  },
  {
    title: "Newsletter Sign-up Form",
    description:
      "This challenge is a newsletter sign-up form with a success message that is displayed when the email address is validated.  It is done with regular Javascript and utilizes local storage to persist the email address from one form to another.",
    image: NewsletterSignupImage,
    solutionUrl: "https://github.com/sjohnston82/email-newsletter",
    liveUrl: "https://elaborate-starburst-c12bdf.netlify.app/",
    techUsed: ["Javascript", "HTML", "CSS"],
  },
  {
    title: "Results Summary Component",
    description:
      "This challenge is a results summary component that requires you to make a pixel-perfect replication.  To get it correct, you need to look to altering opacity levels to correctly match colors.",
    image: ResultSummaryImage,
    solutionUrl: "https://github.com/sjohnston82/result-summary-component",
    liveUrl: "https://splendid-entremet-89b9fc.netlify.app/",
    techUsed: ["NextJs", "HTML", "TailwindCSS", "Typescript"],
  },
];
