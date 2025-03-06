import { BannerContainer, BannerText } from "../styles/banner";
import useMousePosition from "../utilities/mousePosition";
import hiHand from '/icons/hi-hand.svg'
import { motion } from "framer-motion";

export function Banner() {
  const { x } = useMousePosition();
  const sizeMask = 1250;

  return (
    <>
      <BannerContainer>
        <BannerText>
          <div className="text-banner-wrapper">
            <div className="main">
              <h2>
                <span className="name-color">Vitor Ramires</span>
                <p>Developer</p>
                <p>UX / UI</p>
              </h2>
            </div>

            <motion.div
              className="mask"
              animate={{
                WebkitMaskPosition: `${x - sizeMask }px`,
                transition: { type: "tween", ease: "backOut" },
              }}
            >
              <h2>
                <span className="name-color-mask">Front-end Developer</span>
                <p>Seja bem vindo! <span><img src={hiHand} alt="" /></span></p>
              </h2>
            </motion.div>
          </div>
        </BannerText>
      </BannerContainer>
    </>
  );
}
