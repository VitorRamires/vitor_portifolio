import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import { motion, easeInOut } from "framer-motion";
import { useState } from "react";

interface InfoBannerProps {
  name: string;
}

const bannerAnimations = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const linksVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      ease: easeInOut,
    },
  },
};

export function InfoBanner({ name }: InfoBannerProps) {
  const [classAdded, setClassAdded] = useState(false);

  return (
    <section id="info-banner">
      <div className="overlay-banner"></div>

      <div className="center banner-titles">
        <div className={`name ${classAdded ? "begin-animation" : ""}`}>
          <motion.span
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            onAnimationComplete={() => setClassAdded(true)}
          >
            {name.split("").map((char, idx) => (
              <motion.span variants={bannerAnimations} key={idx}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </div>

        <motion.p
          variants={bannerAnimations}
          initial="hidden"
          animate="visible"
          className="role"
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          FRONT-END DEVELOPER
        </motion.p>

        <motion.div
          className="links"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/vitor-ramires-1a6b051bb/"
            target="#"
          >
            <motion.img src={linkedin} variants={linksVariants} alt="linkedin icon" />
          </a>
          <a href="https://github.com/VitorRamires" target="#">
            <motion.img src={github} variants={linksVariants} alt="github icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
