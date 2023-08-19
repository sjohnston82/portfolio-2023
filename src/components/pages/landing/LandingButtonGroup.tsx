import SocialMediaButtonGroup from "../../layout/SocialMediaButtonGroup";
import sjohnstonresume from "../../../styles/assets/sjohnstonresume.pdf";

const LandingButtonGroup = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-5 font-ibmplexsans font-semibold xl:mt-0 ">
      <a
        href={sjohnstonresume}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-1/2 justify-center"
      >
        <button className="duration-400 z-40 w-full rounded-3xl  bg-celticblue p-3 text-white opacity-100 transition-all duration-200 ease-in-out hover:bg-powderblue hover:text-celticblue hover:shadow-lg hover:shadow-gray-700 lg:w-1/2 ">
          Resumé
        </button>
      </a>
      <SocialMediaButtonGroup isFooter={false} />
    </div>
  );
};

export default LandingButtonGroup;
