import {
  BorderButton,
  CastCard,
  HomeMoviesList,
  ReviewCard,
  ReviewModal,
  TrailerSection,
} from "../../components";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { imageUrl } from "../../constants";
import Head from "next/head";
import { useSelector } from "react-redux";

const SingleMovie = ({ movie, reviews }) => {
  const { movie_fields, movie_trailers, similar_movies, cast_and_crew } = movie;
  const { user, status, message } = useSelector((state) => state.auth);

  console.log("Reviews: ", reviews);

  const getAverageStars = () => {
    let total = 0;
    reviews?.map((review) => {
      total += review.rating;
    });
    return total / reviews.length;
  };

  const checkCurrentUserRating = () => {
    let i = 0;
    reviews.map((review) => {
      if (review?.userId == user?.userId) {
        i = 1;
      }
    });

    return i == 1;
  };

  return (
    <>
      <Head>
        <title>{movie_fields?.title}</title>
      </Head>

      <div className="w-full max-w-6xl flex flex-col gap-10  px-4">
        {/* First Section */}
        <div className="max-w-5xl flex flex-col md:flex-row gap-7 md:gap-10">
          <img
            className="w-64 max-w-full h-auto self-center rounded-lg"
            src={imageUrl + movie_fields?.poster_path}
            alt={movie_fields?.title}
          />
          <div className="flex flex-col gap-4 justify-start md:justify-between py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-bold">{movie_fields?.title}</h2>
                {/* <div className="flex items-center gap-3">
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
              </div> */}
              </div>
              <div>
                <Typography
                  component="legend"
                  className="flex justify-between items-center gap-10"
                >
                  <div className="flex flex-col items-center justify-center">
                    {reviews?.length > 0 && (
                      <>
                        <div className="flex items-center justify-center">
                          {" "}
                          <span>{getAverageStars() + "/10"}</span>
                          <StarIcon
                            fontSize="inherit"
                            style={{ color: "yellow" }}
                          />
                        </div>

                        <span className="text-xs">
                          {checkCurrentUserRating() && "You rated this movie!"}
                        </span>
                      </>
                    )}
                  </div>{" "}
                  {user && !checkCurrentUserRating() && (
                    <ReviewModal user={user} movie={movie_fields} />
                  )}
                </Typography>
              </div>
            </div>

            <p>{movie_fields?.overview}</p>
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
            {cast_and_crew.slice(0, 7).map((cast, index) => (
              <CastCard cast={cast} key={index} />
            ))}
          </div>
        </div>
        {/* Trailer Section */}
        {movie_trailers?.slice(0, 2).map((trailer, index) => (
          <TrailerSection trailer={trailer} key={index} />
        ))}

        {/* Review Section */}
        <div className="flex flex-col items-center justify-center space-y-5 m-5 max-w-6xl overflow-hidden">
          <header className="w-full max-w-4xl flex items-center ">
            <h2 className="text-xl">Reviews</h2>
          </header>
          <div className="flex items-stretch gap-4 ">
            {reviews.length > 0
              ? reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))
              : "No review yet!"}
          </div>
        </div>
        {/* Similar Section */}
        <HomeMoviesList title="Similar Movies" movies={similar_movies} />
      </div>
    </>
  );
};
export default SingleMovie;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;
  // console.log("ID: " + id);
  // console.log("Context: " + ctx);
  // Fetch data from external API

  const [movie, reviews, watchedMovies] = await Promise.all([
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/" + id)
      .then((res) => res.data),
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/user/review/movie/" + id)
      .then((res) => res.data),
  ]);

  reviews.map(async (review) => {
    const user = await axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/user/" + review?.userId)
      .then((res) => res.data);
    review = { ...review, user: user };
  });

  // Pass data to the page via props
  return {
    props: { movie, reviews },
  };
}
