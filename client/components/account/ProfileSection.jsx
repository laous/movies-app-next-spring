import styled from "styled-components";

const ProfileSection = ({ setActualList }) => {
  return (
    <Container>
      <ProfileInfo>
        <Profile>
          <Photo>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png"
              alt="Mike Ehrmantraut"
            />
          </Photo>
          <Info>
            <Name>Oussama</Name>
            <Username>@laous</Username>
          </Info>
        </Profile>
        <Readbooks onClick={() => setActualList("watched")}>
          <Title>Watched Movies</Title>
          <Number>16</Number>
        </Readbooks>
        <ReadPages onClick={() => setActualList("favorites")}>
          <Title>Favorite Movies</Title>
          <Number>03</Number>
        </ReadPages>
        <TotalAuthors onClick={() => setActualList("watchlist")}>
          <Title>Watchlist</Title>
          <Number>01</Number>
        </TotalAuthors>
      </ProfileInfo>
    </Container>
  );
};

export default ProfileSection;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.2rem;
  height: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.7rem;
  margin-bottom: 1rem;
`;

const Profile = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  min-width: 100%;
  padding-left: 2.4rem;
  margin-bottom: 1.3rem;
  z-index: 10;

  /* @media screen and (max-width: 1024px) {
    padding-left: 0.7rem;
  } */
`;
const Photo = styled.div`
  margin-top: 0rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-right: auto;
  margin-left: 0.8rem;
  justify-content: center;
  gap: 4px;
`;
const Name = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
`;
const Username = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
`;

const Readbooks = styled.div`
  width: 90%;
  max-width: 389px;
  height: 53px;
  background-image: url("/assets/readbooks.png");
  background-size: cover;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;
const ReadPages = styled(Readbooks)`
  background-image: url("/assets/readpages.png");
`;
const TotalAuthors = styled(Readbooks)`
  background-image: url("/assets/totalauthors.png");
`;

const Title = styled.span`
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;
const Number = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;
