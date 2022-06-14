import Link from "next/link";
import { imageUrl } from "../../constants/";
import Image from "next/image";

const HomeMoviesListItem = ({ movie }) => {
  return (
    <div
      className="flex flex-col items-center  gap-1 my-3 "
      style={{ flex: 1 }}
    >
      <div className="relative group w-60 h-auto">
        {/* Image */}
        <Image
          src={imageUrl + movie?.poster_path}
          alt={movie?.title}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${
            imageUrl + movie?.poster_path
          }&w=240&h=360&q=1`}
          loading="lazy"
          width={"240px"}
          height="360px"
          className={"w-full h-auto  group-hover:opacity-25 rounded-xl"}
          objectFit="cover"
        />
        {/* 
        <img
          className="w-60 max-w-full h-auto group-hover:opacity-25 rounded-xl"
          src={imageUrl + movie?.poster_path}
          alt={movie?.title}
          loading="lazy"
        /> */}

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

      <h3 className="text-base max-w-[80%]">{movie?.title}</h3>
    </div>
  );
};
export default HomeMoviesListItem;
