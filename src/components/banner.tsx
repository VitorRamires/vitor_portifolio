import { useEffect, useRef } from "react";
import { BannerContainer, BannerText } from "../styles/banner";
import useMousePosition from "../utilities/mousePosition";
import { motion } from "framer-motion";

export function Banner() {
  const { mousePosition, setReferenceElement } = useMousePosition();
  const sizeMask = 250;
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
                <p>Front-end Developer</p>
              </h2>
            </div>

            <motion.div
              className="mask"
              animate={{
                WebkitMaskPosition: `${mousePosition.x - sizeMask / 2.3}px ${
                  mousePosition.y - sizeMask / 4
                }px`,
                transition: { type: "tween", ease: "backOut" },
              }}
            >
              <h2>
                <span className="name-color">
                  <span className="mobile-animation">Vitor Ramires</span>
                </span>
                <p>Front-end Developer</p>
              </h2>
            </motion.div>
          </div>
        </BannerText>
      </BannerContainer>
    </>
  );
}
