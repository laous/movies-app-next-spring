import Link from "next/link";
import { imageUrl } from "../../constants";

const SearchItem = ({ movie }) => {
  const { id, title, poster_path, release_date } = movie;
  return (
    <Link href={"/movies/" + id} class="w-full">
      <div className="text-normal mt-2 leading-4 w-full text-white flex justify-between items-center cursor-pointer">
        <img
          className="w-16  h-auto rounded-md"
          src={imageUrl + poster_path}
          alt={title}
        />
        <h2>{title}</h2>
        <span>{release_date?.split("-")[0]}</span>
      </div>
    </Link>
  );
};
export default SearchItem;
