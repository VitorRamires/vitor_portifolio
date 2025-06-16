import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

export function InfoBanner() {
  return (
    <div className="info-banner">
      <div className="overlay-banner"></div>

      <div className="center banner-titles">
        <p className="name">Vitor Ramires</p>
        <p className="role">Front-end developer</p>

        <div className="links">
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
}
