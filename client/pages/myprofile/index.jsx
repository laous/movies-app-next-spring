import styled from "styled-components";
import { MdOutlineMenuBook } from "react-icons/md";
import { FiLogOut, FiSettings } from "react-icons/fi";
import {
  ProfileSection,
  HomeMoviesList,
  MovieMiniCard,
} from "../../components";

const MyProfile = () => {
  return (
    <main className="w-full flex flex-col  md:flex-row justify-between gap-4 mb-16">
      <Container>
        <Left>
          <Cover />
          <ProfileSection />
          <ProfileSettings>
            <Settings>
              <FiSettings />
              <span>Settings</span>
            </Settings>
            <span>|</span>
            <Logout>
              <FiLogOut />
              <span>Log out</span>
            </Logout>
          </ProfileSettings>
        </Left>
        <Right>
          <div className=" flex flex-col justify-center">
            <header className="w-full max-w-4xl flex items-center justify-between">
              <h2 className="text-xl">Watched Movies</h2>
            </header>
            <div className="flex flex-wrap items-stretch gap-4">
              <MovieMiniCard />
              <MovieMiniCard />
              <MovieMiniCard />
              <MovieMiniCard />
            </div>
          </div>
        </Right>
      </Container>
    </main>
  );
};
export default MyProfile;

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
  padding: 1.2rem;
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
