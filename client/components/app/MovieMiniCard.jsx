import Link from "next/link";

const MovieMiniCard = () => {
  return (
    <div className="flex flex-col space-y-2 my-3 max-w-[47%] md:max-w-none">
      <div className="group w-64 max-w-full h-auto">
        {/* Image */}
        <img
          className="w-64 max-w-full h-auto group-hover:opacity-25"
          src="https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SL1280_.jpg"
        />
      </div>

      <div className="flex items-center space-x-5 justify-between px-1">
        <div className="flex flex-col">
          <h3 className="text-xl">Your Name</h3>
          <span className="text-xs">By Makoto Shinkai</span>
        </div>
        <Link href={"/"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div className="w-full px-2 py-0.5 h-full bg-black font-normal text-xs md:text-sm opacity-90">
              Watched
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MovieMiniCard;
