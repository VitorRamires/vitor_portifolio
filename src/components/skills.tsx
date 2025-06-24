import { useEffect } from "react";
import { Title } from "./title";
import { SkillsData } from "../data/skills";
import arrow from "../assets/icons/arrow.svg";

export function Skills() {
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
    <section id="skills">
      <div className="decoration">
        <canvas id="particleCanvas"></canvas>
      </div>
      <div className="center">
        <div className="skills-wrapper">
          <Title synonim="Habilidades" title="Skills Técnicas" />
          <div className="skills-box">
            <ul>
              {SkillsData.map((skill, index) => {
                return (
                  <li key={index}>
                    <img src={skill.source} />
                    <p>{skill.tech}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow-down-icon" />
        <img src={arrow} alt="arrow-down-icon" />
        <img src={arrow} alt="arrow-down-icon" />
      </div>
    </section>
  );
}
