import Socials from "./Socials";
import Suggestions from "./Suggestions";

const footer = () => {
  return (
    <div className="bg-no-repeat bg-cover flex flex-col justify-center items-center  w-full overflow-hidden self-center max-w-screen-[120rem] 2xl:ml-0 2xl:mb-0 ">
      <Suggestions />
      <Socials />
    </div>
  );
};

export default footer;
