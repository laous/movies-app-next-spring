import HeroSliderItem from "./HeroSliderItem";
import Link from "next/link";

const HeroSlider = ({ title }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">{title ? title : "Top Movies"}</h2>
        <Link href="/">
          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FF6969] to-[#E752FF]">
            See more
          </div>
        </Link>
      </header>
      <div className="w-full flex justify-center items-center">
        <HeroSliderItem />
      </div>
    </section>
  );
};
export default HeroSlider;
