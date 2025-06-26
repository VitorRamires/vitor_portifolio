import { useEffect, useRef } from "react";
import { Title } from "./title";
import { SkillsData } from "../data/skills";
import { motion, useInView } from "framer-motion";
import arrow from "../assets/icons/arrow.svg";

export function Skills() {
  const animRef = useRef(null);
  const inView = useInView(animRef, { amount: 0.25, once: true });

  const animationSkills = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      type: "tween" as const,
    },
    hiddenDecoration: {
      width: 0,
      opacity: 0,
    },
    visibleDecoration: {
      width: 450,
      opacity: 1,
    },
  };

  // animation particles
  useEffect(() => {
    const canvas = document.getElementById(
      "particleCanvas"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const canvasContext = canvas.getContext("2d");
      if (canvasContext) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 300 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        }));

        function animate() {
          if (!canvasContext || !canvas) return;
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((particle) => {
            canvasContext.beginPath();
            canvasContext.arc(
              particle.x,
              particle.y,
              particle.radius,
              0,
              Math.PI * 1.5
            );
            canvasContext.fillStyle = "#6b9900";
            canvasContext.fill();
            particle.x += particle.dx;
            particle.y += particle.dy;
            if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
          });
          requestAnimationFrame(animate);
        }

        animate();
      }
    }
  }, []);

  return (
    <motion.section id="skills" ref={animRef}>
      <motion.div
        variants={animationSkills}
        initial="hiddenDecoration"
        animate={inView ? "visibleDecoration" : "hiddenDecoration"}
        transition={{ duration: 0.3 }}
        className="decoration"
      >
        <canvas id="particleCanvas"></canvas>
      </motion.div>
      <div className="center">
        <div className="skills-wrapper">
          <Title synonim="Habilidades" title="Skills Técnicas" />
          <motion.div
            variants={animationSkills}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="skills-box"
          >
            <motion.ul
              variants={animationSkills}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {SkillsData.map((skill, index) => {
                return (
                  <li key={index}>
                    <img src={skill.source} />
                    <p>{skill.tech}</p>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow-down-icon" />
        <img src={arrow} alt="arrow-down-icon" />
        <img src={arrow} alt="arrow-down-icon" />
      </div>
    </motion.section>
  );
}
