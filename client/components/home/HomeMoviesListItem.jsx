import Link from "next/link";
import { imageUrl } from "../../constants/";
const HomeMoviesListItem = ({ movie }) => {
  return (
    <div className="flex flex-col  space-y-2 my-3 max-w-[47%]  md:max-w-[36%] lg:max-w-[23%]">
      <div className="relative group w-64 h-auto">
        {/* Image */}
        <img
          className="w-60 max-w-full h-auto group-hover:opacity-25 rounded-xl"
          src={imageUrl + movie?.poster_path}
          alt={movie?.title}
        />
        {/* Content on hover */}
        <div className="max-w-full absolute bg-black bottom-0 top-0 left-0 right-0 opacity-0 group-hover:opacity-80 flex flex-col justify-between items-center py-5 px-4">
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-1">
              <h2 className="text-lg md:text-xl font-semibold">
                {movie ? movie.title : "Your Name"}
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-sm md:text-base font-medium">
                  {movie?.release_date.split("-")[0]}
                </span>
                <span className="text-base font-medium">|</span>
                <span className="text-base font-medium">
                  {movie?.original_language.toUpperCase()}
                </span>
                <span className="text-base font-medium">|</span>
                <span className="text-base font-medium">+16</span>
              </div>

              {/* <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-normal text-[#7B7B7B]">
                  Animation,
                </span>
                <span className="text-base font-normal text-[#7B7B7B]">
                  Drama,
                </span>
                <span className="text-base font-normal text-[#7B7B7B]">
                  Fantasy
                </span>
              </div> */}
            </header>

            {/* content */}
            <div className="flex flex-col gap-1">
              <h4 className="text-base md:text-lg font-semibold">Overview</h4>
              <p className="text-xs md:text-sm font-normal">
                {movie?.overview.slice(0, 200) +
                  (movie?.overview.length > 200 ? " ..." : "")}
              </p>
            </div>
          </div>
          <Link href={"/movies/" + movie?.id} passHref>
            <div className="py-1 px-5 rounded-[5px] bg-gradient-to-r p-[6px] from-[#FF6969] to-[#E752FF] cursor-pointer">
              Details
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-5 justify-center px-1">
        <div className="flex flex-col">
          <h3 className="text-base">{movie?.title}</h3>
          {/* <span className="text-xs">By Makoto Shinkai</span> */}
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
  );
};
export default HomeMoviesListItem;
