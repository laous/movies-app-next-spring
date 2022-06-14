import Link from "next/link";
import { imageUrl } from "../../constants";

const MovieMiniCard = ({ movie }) => {
  return (
    <Link href={"/movies/" + movie?.id}>
      <div className="flex flex-col my-3 cursor-pointer items-center justify-center max-w-[17rem]">
        <div className="group max-w-full h-auto">
          {/* Image */}
          <img
            className="w-36  h-auto group-hover:opacity-75 rounded-md"
            src={imageUrl + movie?.poster_path}
            alt={movie?.title}
            loading="lazy"
          />
        </div>
        <h3 className="text-sm max-w-[130px] text-center">{movie?.title}</h3>
        {/* <div className="flex items-center space-x-5 justify-center px-1"> */}
        {/* <div className="flex flex-col">
            <h3 className="text-dm">{movie?.title}</h3>
          </div> */}
        {/* <Link href={"/"}>
          <div className="p-0.5  bg-gradient-to-tr  from-[#ff6969] to-[#e752ff] cursor-pointer rounded-sm ">
            <div className="w-full px-2 py-0.5 h-full bg-black font-normal text-xs md:text-sm opacity-90">
              Watched
            </div>
          </div>
        </Link> */}
        {/* </div> */}
      </div>
    </Link>
  );
};
export default MovieMiniCard;
