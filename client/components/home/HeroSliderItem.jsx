import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

import { imageUrl } from "../../constants/";

const HeroSliderItem = ({ setShowModal, setMovieLink, movieLink, movie }) => {
  const handlePlayClick = () => {
    setShowModal(true);
    setMovieLink(
      movie.trailers.length > 2
        ? movie?.trailers[1].key
        : movie?.trailers[0].key
    );
  };
  return (
    <div
      className={`relative w-full max-w-5xl h-[502px] bg-no-repeat bg-cover  flex items-center justify-center bg-center 
      `}
      style={{ backgroundImage: `url(${imageUrl + movie?.backdrop_path})` }}
    >
      <div className=" absolute top-0 left-0 h-full w-full bg-black opacity-80"></div>
      <button
        className="cursor-pointer z-10 opacity-50"
        onClick={handlePlayClick}
      >
        <AiFillPlayCircle className="w-20 h-20" />
      </button>

      <div className="absolute top-16 left-16 bottom-0 w-[240px] h-full z-10">
        <div className="flex flex-col gap-4 justify-between h-[60%] items-baseline">
          <header className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-semibold">{movie.title}</h2>
            <div className="flex items-center justify-between gap-3 max-w-[130px]">
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
              {movie?.overview.slice(0, 150) +
                (movie?.overview.length > 150 ? " ..." : "")}
            </p>
          </div>
          <Link href={"/movies/" + movie.id}>
            <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
              <div className="w-full px-6 py-1 bg-black font-normal text-base opacity-90">
                Details
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSliderItem;
