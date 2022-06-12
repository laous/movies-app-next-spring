import Link from "next/link";

const MovieMiniCard = ({ movie }) => {
  return (
    <Link href="/movies/your-name">
      <div className="flex flex-col my-3 max-w-[47%] md:max-w-none cursor-pointer">
        <div className="group w-36 max-w-full h-auto">
          {/* Image */}
          <img
            className="w-64 max-w-full h-auto group-hover:opacity-75"
            src="https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SL1280_.jpg"
          />
        </div>

        <div className="flex items-center space-x-5 justify-center px-1">
          <div className="flex flex-col">
            <h3 className="text-md">Your Name</h3>
          </div>
          {/* <Link href={"/"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div className="w-full px-2 py-0.5 h-full bg-black font-normal text-xs md:text-sm opacity-90">
              Watched
            </div>
          </div>
        </Link> */}
        </div>
      </div>
    </Link>
  );
};
export default MovieMiniCard;
