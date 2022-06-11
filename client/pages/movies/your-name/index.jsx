import {
  BorderButton,
  CastCard,
  HomeMoviesList,
  ReviewCard,
  ReviewModal,
  TrailerSection,
} from "../../../components";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const YourName = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-10  px-4">
      {/* First Section */}
      <div className="max-w-5xl flex flex-col md:flex-row gap-7 md:gap-10">
        <img
          className="w-64 max-w-full h-auto self-center"
          src="https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SL1280_.jpg"
        />
        <div className="flex flex-col gap-4 justify-start md:justify-between py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold">Your name</h2>
              <div className="flex items-center gap-3">
                <span className="border border-white px-2 py-[1px] rounded-md text-center">
                  Category
                </span>
                <span className="border border-white px-2 py-[1px] rounded-md text-center">
                  Category
                </span>
                <span className="border border-white px-2 py-[1px] rounded-md text-center">
                  Category
                </span>
                <span className="border border-white px-2 py-[1px] rounded-md text-center">
                  Category
                </span>
              </div>
            </div>
            <div>
              <Typography
                component="legend"
                className="flex justify-between items-center gap-10"
              >
                <div>
                  9/10{" "}
                  <StarIcon fontSize="inherit" style={{ color: "yellow" }} />
                </div>{" "}
                <ReviewModal />
              </Typography>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis cumque molestiae tempore! Repellendus assumenda
            asperiores laboriosam eligendi id. Commodi temporibus voluptate
            cupiditate, ratione sequi omnis ad modi magni reprehenderit.
          </p>
          <div className="flex items-center gap-3">
            <BorderButton text={"Mark as Watched"} color="black" />
            <BorderButton text={"Add to Favorites"} color="transparent" />
            <BorderButton text={"Add to Watchlist"} color="black" />
          </div>
        </div>
      </div>
      {/* Cast Section */}
      <div className="flex flex-col items-center justify-center space-y-5 m-5">
        <header className="w-full max-w-4xl flex items-center ">
          <h2 className="text-xl">Cast</h2>
        </header>
        <div className="flex flex-wrap items-stretch gap-4">
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
        </div>
      </div>
      {/* Trailer Section */}
      <TrailerSection />
      {/* Review Section */}
      <div className="flex flex-col items-center justify-center space-y-5 m-5 max-w-6xl overflow-hidden">
        <header className="w-full max-w-4xl flex items-center ">
          <h2 className="text-xl">Reviews</h2>
        </header>
        <div className="flex items-stretch gap-4 ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      {/* Similar Section */}
      <HomeMoviesList title="Similar Movies" />
    </div>
  );
};
export default YourName;
