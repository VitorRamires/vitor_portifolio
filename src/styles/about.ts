import styled from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10rem;

  margin-bottom: 100px;

  font-family: "LexendExa";
`;

export const AboutWrapper = styled.div`
  position: relative;
  width: 80%;
  padding: 75px 55px;
  margin: 0 auto;

  background-color: #1d1d1d;
  box-shadow: 25px 25px 3px 0 rgba(14, 14, 14, 0.45);
  border-radius: 7px;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 60px;

  z-index: 2;

  .close-tag-img {
    width: 270px;
    height: auto;
    place-self: center;
  }
`;

export const AboutInfo = styled.div`
  line-height: 1.5;
  color: ${({ theme }) => theme.primaryColor};
`;

export const AboutTextBox = styled.div`
  .title {
    font-weight: 400;
    font-size: 1.3rem;
  }

  .name-role {
    margin: 35px 0;

    h2 {
      font-size: 1.9rem;
      color: #6185ff;
      font-weight: 400;
      margin-bottom: 4px;
    }

    h4 {
      color:rgb(192, 192, 192);
      font-weight: 400;
    }
  }
`;

export const AboutLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  .about-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .link {
      width: 75px;
      height: 75px;

      border: 1px solid #313a57;
      border-radius: 3px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const DecorationAbout = styled.div`
  position: absolute;
  bottom: -10%;
  left: 0;
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.primaryBg};
  box-shadow: 0 5px 30px 0 rgba(60, 105, 255, 0.26);

  z-index: 1;

  border-image: linear-gradient(to right, #3c69ff 0%, #243f99 100%) 1;
  border-radius: 5px;  // NOT WORKING!
  border-width: 4px;
  border-style: solid;
  padding: 5px;
`;
