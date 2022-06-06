import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
const HeroSliderItem = () => {
  const bgimage =
    "https://filmdaze.net/wp-content/uploads/2018/06/vlcsnap-2018-06-13-16h56m12s456.png";
  return (
    <div
      className={`relative w-full max-w-5xl h-[502px] bg-no-repeat bg-cover  flex items-center justify-center bg-center
      bg-[url('https://images.alphacoders.com/736/thumb-1920-736461.png')]`}
    >
      <div className=" absolute top-0 left-0 h-full w-full bg-black opacity-80"></div>
      <button className="cursor-pointer z-10 opacity-50">
        <AiFillPlayCircle className="w-20 h-20" />
      </button>

      <div className="absolute top-16 left-16 bottom-0 w-[240px] h-full z-10">
        <div className="flex flex-col gap-4 justify-between h-[60%] items-baseline">
          <header className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-semibold">Your Name</h2>
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base font-medium">+16</span>
              <span className="text-base font-medium">|</span>
              <span className="text-base font-medium">+16</span>
              <span className="text-base font-medium">|</span>
              <span className="text-base font-medium">+16</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-normal text-[#7B7B7B]">
                Animation,
              </span>
              <span className="text-base font-normal text-[#7B7B7B]">
                Drama,
              </span>
              <span className="text-base font-normal text-[#7B7B7B]">
                Fantasy
              </span>
            </div>
          </header>
          {/* content */}
          <div className="flex flex-col gap-1">
            <h4 className="text-base md:text-lg font-semibold">Story</h4>
            <p className="text-xs md:text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eum voluptates iste officiis obcaecati animi nemo explicabo illum.
            </p>
          </div>
          <Link href={"/"}>
            <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
              <div className="w-full px-6 py-1 bg-black font-normal text-base opacity-90">
                Add to Watchlist
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSliderItem;
