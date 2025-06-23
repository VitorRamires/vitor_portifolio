import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

export function InfoBanner() {
  return (
    <section id="info-banner">
      <div className="overlay-banner"></div>

      <div className="center banner-titles">
        <div className="name"><span>Vitor Ramires</span></div>
        <p className="role">Front-end developer</p>

        <div className="links">
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </section>
  );
}
