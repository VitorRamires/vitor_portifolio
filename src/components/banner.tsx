import { useEffect, useRef } from "react";
import { BannerContainer, BannerText } from "../styles/banner";
import useMousePosition from "../utilities/mousePosition";
import hiHand from "/icons/hi-hand.svg";
import { motion } from "framer-motion";

export function Banner() {
  const { mousePosition, setReferenceElement } = useMousePosition();
  const sizeMask = 2300;
  const referenceElement = useRef(null);

  useEffect(() => {
    setReferenceElement(referenceElement.current);
  }, []);

  return (
    <>
      <BannerContainer ref={referenceElement}>
        <BannerText>
          <div className="text-banner-wrapper">
            <div className="main">
              <h2>
                <span className="name-color">
                  <span className="mobile-animation">Vitor Ramires</span>
                </span>
                <p>Developer - UX / UI</p>
              </h2>
            </div>

            <motion.div
              className="mask"
              animate={{
                WebkitMaskPosition: `${mousePosition.x - sizeMask / 1.35}px`,
                transition: { type: "tween", ease: "backOut" },
              }}
            >
              <h2>
                <span className="name-color-mask">Front-end Developer</span>
                <p>
                  Seja bem vindo!{" "}
                  <span>
                    <img src={hiHand} alt="" />
                  </span>
                </p>
              </h2>
            </motion.div>
          </div>
        </BannerText>
      </BannerContainer>
    </>
  );
}
