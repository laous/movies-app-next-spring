import { imageUrl } from "../../constants";

const CastCard = ({ cast }) => {
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer items-center "
      style={{ flex: 1 }}
    >
      <img
        src={imageUrl + cast?.profile_path}
        alt={cast?.title}
        className="w-20 md:w-28 max-w-full h-auto rounded-md"
        loading="lazy"
      />
      <div className="flex flex-col">
        <h3 className="text-sm">{cast.name}</h3>
        <span className="text-xs text-gray-300">as {cast?.character}</span>
      </div>
    </div>
  );
};
export default CastCard;
