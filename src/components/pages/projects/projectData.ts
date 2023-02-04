import JobTrackerBadge from "./logos/JobTrackerBadge";

interface Project {
  tagline: string;
  features: string[];
  projectLink?: string;
  codeLink?: string;
}

export const jobTrackerData: Project = {
  tagline:
    "JobTracker is a MERN app that helps users track all their important job hunting information in one place.",
  features: [
    "Store important job application info to help keep you organized and efficient in your job search.",
    "Upload and store your resumes and cover letters.",
    "Sort and filter active and archived listings.",
    "Archive your job applications to easily keep track of where you have applied to in the past and when.",
    "Ability to enable auto-archiving to archive jobs automatically after a certain time period of inactivity.",
  ],
  projectLink: "https://job-tracker.xyz",
  codeLink: "https://github.com/sjohnston82/job-tracker",
};

export const yahtzeeData: Project = {
  tagline:
    "An online multiplayer version of Yahtzee built using the MERN stack and socket.io. Play full games and chat.  This project was a partner capstone for PDX Code Guild's Adv. JavaScript & MERN Stack Course.",
  features: [
    "Uses socket.io for real-time game-play.",
    "Ability to host lobbies for other to join.",
    "Chat with your friends in-game.",
  ],
  codeLink: "https://github.com/mcbridz/pdx_yahtzee",
};

export const quarterMasterData: Project = {
  tagline:
    "QuarterMaster is a pantry inventory application to help you keep track of the food in your pantry.",
  features: [
    "Add all the food in your pantry so you're up-to-date on what you already have at home while you're out.",
    "Keep track of food expiration dates so you know when the things that get pushed to back of the pantry are ready to be thrown out.",
    "Add items to a grocery list to make shopping easy.",
    "Uses the spoonacular API to generate images for food items that are added.",
    "Sort and filter active and archived listings.",
  ],
  projectLink: "https://quartermaster.pythonanywhere.com/",
  codeLink: "https://github.com/sjohnston82/quartermaster/",
};
