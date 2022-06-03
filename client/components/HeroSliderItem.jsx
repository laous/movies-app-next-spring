import { AiFillPlayCircle } from "react-icons/ai";

const HeroSliderItem = () => {
  const bgimage =
    "https://filmdaze.net/wp-content/uploads/2018/06/vlcsnap-2018-06-13-16h56m12s456.png";
  return (
    <div
      className={`relative max-w-5xl w-full h-[502px] bg-no-repeat bg-cover  flex items-center justify-center bg-center
      bg-[url('https://images.alphacoders.com/736/thumb-1920-736461.png')]`}
    >
      <div className=" absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      <button className="cursor-pointer z-10">
        <AiFillPlayCircle className="w-20 h-20" />
      </button>
      <div></div>
    </div>
  );
};
export default HeroSliderItem;
