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
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getFavoriteMovies,
  getWatchedMovies,
  markMovieAsWatched,
  unwatchMovie,
  removeFromFavorites,
  addToFavorites,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
} from "../../reducers/userDataSlice";
import { toast } from "react-toastify";
import Link from "next/link";

const SingleMovie = ({ movie, reviews }) => {
  const { movie_fields, movie_trailers, similar_movies, cast_and_crew } = movie;

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const { user, watchedMovies, favoriteMovies, watchlist } = userData;

  const [watched, setWatched] = useState(true);
  const [isFavorite, setIsFavorite] = useState(true);
  const [isInWatchlist, setIsInWatchlist] = useState(true);

  useEffect(() => {
    if (watchedMovies.status === "idle") {
      dispatch(getWatchedMovies());
    }
    if (favoriteMovies.status === "idle") {
      dispatch(getFavoriteMovies());
    }
    if (watchlist.status === "idle") {
      dispatch(getWatchlist());
    }
  }, [dispatch, watchedMovies.status, favoriteMovies.status, watchlist.status]);

  useEffect(() => {
    reviews.map(async (review) => {
      const user = await axios
        .get(process.env.NEXT_PUBLIC_API_LINK + "/user/" + review?.userId)
        .then((res) => res.data);
      if (user) review.user = user;
    });
  }, [reviews]);

  const router = useRouter();
  const id = router.query.id;
  const checkIfWatched = () => {
    const movie_index = watchedMovies.list.findIndex((item) => id == item.id);
    if (movie_index > -1) {
      return true;
    }
    return false;
  };

  const checkIsFavorite = () => {
    const movie_index = favoriteMovies.list.findIndex((item) => id == item.id);
    if (movie_index > -1) {
      return true;
    }
    return false;
  };

  const checkIsInWatchlist = () => {
    const movie_index = watchlist.list.findIndex((item) => id == item.id);
    if (movie_index > -1) {
      return true;
    }
    return false;
  };

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

  useEffect(() => {
    setWatched(checkIfWatched());
    setIsFavorite(checkIsFavorite());
    setIsInWatchlist(checkIsInWatchlist());
  }, [id, checkIfWatched, watchedMovies, favoriteMovies, watchlist]);

  // buttons events
  // handle watching movies
  const markAsWatched = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/markWatched/" +
        user?.userId +
        "/" +
        id
    );
    if (watched) return;
    dispatch(markMovieAsWatched(movie_fields));

    if (!res) {
      toast.error("Movie not added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    toast.success("Movie added!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setWatched(true);
  };
  const unmarkAsWatched = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/unMarkWatched/" +
        user?.userId +
        "/" +
        id
    );
    if (!watched) return;
    dispatch(unwatchMovie(movie_fields));

    if (!res) {
      toast.error("Movie not removed!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    toast.success("Movie removed!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setWatched(false);
  };

  // handle favorite movies
  const hanldeAddToFavorites = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/addToFavoritesList/" +
        user?.userId +
        "/" +
        id
    );
    if (!watched) return;

    if (!res) {
      toast.error("Movie not added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    dispatch(addToFavorites(movie_fields));
    toast.success("Movie added!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsFavorite(true);
  };
  const handleRemoveFromFavorites = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/removeFromFavoritesList/" +
        user?.userId +
        "/" +
        id
    );
    if (!watched) return;

    if (!res) {
      toast.error("Movie not removed!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    dispatch(removeFromFavorites(movie_fields));
    toast.success("Movie removed!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsFavorite(false);
  };

  // handle watchList
  const hanldeAddToWatchlist = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/addToWishList/" +
        user?.userId +
        "/" +
        id
    );

    if (!res) {
      toast.error("Movie not added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    dispatch(addToWatchlist(movie_fields));
    toast.success("Movie added!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsInWatchlist(true);
  };
  const handleRemoveFromWatchlist = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_LINK +
        "/user/removeFromWishList/" +
        user?.userId +
        "/" +
        id
    );

    if (!res) {
      toast.error("Movie not removed!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    dispatch(removeFromWatchlist(movie_fields));
    toast.success("Movie removed!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsInWatchlist(false);
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
            {/* Buttons */}
            {user ? (
              <div className="flex items-center gap-3">
                {watched ? (
                  <BorderButton
                    text={"Unwatch"}
                    color="black"
                    onClick={unmarkAsWatched}
                  />
                ) : (
                  <BorderButton
                    text={"Mark as Watched"}
                    color="black"
                    onClick={markAsWatched}
                  />
                )}
                {watched &&
                  (isFavorite ? (
                    <BorderButton
                      text={"Remove from Favorites"}
                      color="transparent"
                      onClick={handleRemoveFromFavorites}
                    />
                  ) : (
                    <BorderButton
                      text={"Add to Favorites"}
                      color="transparent"
                      onClick={hanldeAddToFavorites}
                    />
                  ))}

                {isInWatchlist ? (
                  <BorderButton
                    text={"Remove from Watchlist"}
                    color="black"
                    onClick={handleRemoveFromWatchlist}
                  />
                ) : (
                  <BorderButton
                    text={"Add to Watchlist"}
                    color="black"
                    onClick={hanldeAddToWatchlist}
                  />
                )}
              </div>
            ) : (
              <Link href="/account">
                <p className="text-red-500 text-center cursor-pointer hover:text-red-300">
                  Please sign in for more!
                </p>
              </Link>
            )}
          </div>
        </div>
        {/* Cast Section */}
        <div className="flex flex-col items-center justify-center space-y-5 m-5">
          <header className="w-full max-w-4xl flex items-center ">
            <h2 className="text-xl">Cast</h2>
          </header>
          <div className="flex flex-wrap items-stretch gap-4">
            {cast_and_crew.slice(0, 12).map((cast, index) => (
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

  const [movie, reviews] = await Promise.all([
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/" + id)
      .then((res) => res.data),
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/user/review/movie/" + id)
      .then((res) => res.data)
      .then((res) => {
        res.map(async (review) => {
          const user = await axios
            .get(process.env.NEXT_PUBLIC_API_LINK + "/user/" + review?.userId)
            .then((res) => res.data);
          if (user) review.user = user;
          return;
        });
        return res;
      }),
  ]);

  // Pass data to the page via props
  return {
    props: { movie, reviews },
  };
}
