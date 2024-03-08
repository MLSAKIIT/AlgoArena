import Image from "next/image";
const GradientImg = () => {
  return (
    <div className="img_div absolute bottom-0 left-0">
      <Image
        className="hidden sm:block w-3/6 md:w-3/6 lg:w-3/6 "
        src="/assets/icons/ellipse.svg"
        alt="gradient "
        width={100}
        height={100}
      />
    </div>
  );
};

export default GradientImg;
