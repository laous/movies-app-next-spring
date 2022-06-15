import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { ProfileSection, MoviesList } from "../../components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  getWatchedMovies,
  getFavoriteMovies,
  getWatchlist,
  resetUserData,
  logout,
} from "../../reducers/userDataSlice";

const MyProfile = () => {
  const [actualList, setActualList] = useState("watched"); // watched | favorites | watchlist
  const router = useRouter();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const { user, watchedMovies, favoriteMovies, watchlist } = userData;
  console.log("User data: ", userData);

  useEffect(() => {
    if (watchedMovies.status == "idle") {
      dispatch(getWatchedMovies());
    }
    if (favoriteMovies.status == "idle") {
      dispatch(getFavoriteMovies());
    }
    if (watchlist.status == "idle") {
      dispatch(getWatchlist());
    }
  }, [
    dispatch,
    watchedMovies.status,
    favoriteMovies.status,
    watchlist.status,
    user.userId,
  ]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(resetUserData());
    router.push("/account");
    toast.info("You are logged out!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <main className="w-full flex flex-col  md:flex-row justify-between gap-4 mb-16">
      <Container>
        <Left>
          <Cover />
          <ProfileSection setActualList={setActualList} user={user} />
          <ProfileSettings>
            <Logout className="mx-auto" onClick={handleLogout}>
              <FiLogOut />
              <span>Log out</span>
            </Logout>
          </ProfileSettings>
        </Left>
        <Right>
          {actualList === "watched" && (
            <MoviesList title="Watched Movies" movies={watchedMovies} />
          )}
          {/* Favorites Movies */}
          {actualList === "favorites" && (
            <MoviesList title="Favorite Movies" movies={favoriteMovies} />
          )}

          {/* Watchlist Movies */}
          {actualList === "watchlist" && (
            <MoviesList title="Watchlist" movies={watchlist} />
          )}
        </Right>
      </Container>
    </main>
  );
};
export default MyProfile;
MyProfile.auth = true;

const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    gap: 2rem;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    gap: 2rem;
    height: auto;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

const Left = styled.section`
  grid-area: 1 / 1 / 6 / 2;
  height: 100%;
  max-width: 458px;
  min-width: 400px;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0.1) 0%,
    rgba(100, 100, 100, 0.1) 100%
  );
  backdrop-filter: blur(50px);
  border-radius: 10px;
  padding: 1.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* @media screen and (max-width: 928px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex: 1;
    align-self: center;
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 6 / 2;
  }
`;
const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-image: url("/assets/profilecover.png");
  background-size: cover;
  z-index: 1;

  border-radius: 10px;
`;

/*** RIght Side */
const Right = styled.section`
  grid-area: 1 / 2 / 6 / 5;
  height: 100%;
  /* background-color: #141a1f; */
  border-radius: 20px;
  padding: 1rem;
  overflow-x: auto;
  background: linear-gradient(
    180deg,
    rgba(100, 100, 100, 0.1) 0%,
    rgba(217, 217, 217, 0.1) 100%
  );
  backdrop-filter: blur(50px);
  /* @media screen and (max-width: 928px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex: 1;
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 2 / 6 / 4;
  }
`;

const ProfileSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  margin-bottom: auto;
`;
const Settings = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  * {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
const Logout = styled(Settings)`
  * {
    color: #dd4f4f;
  }
`;
