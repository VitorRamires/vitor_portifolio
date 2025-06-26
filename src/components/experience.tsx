import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import badge from "../assets/icons/person-badge.svg";
import geo from "../assets/icons/geo.svg";
import calendar from "../assets/icons/calendar.svg";

interface ExpInterface {
  company: string;
  time: string;
  location: string;
  role: string;
  description: Array<string>;
  tags: Array<string>;
}

export function Experience({ exp }: { exp: ExpInterface }) {
  const animRef = useRef(null);
  const inView = useInView(animRef, { amount: 0.4, once: true });
  const animationExp = {
    hidden: {
      opacity: 0,
      x: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <React.Fragment>
      <motion.div
        variants={animationExp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.2 }}
        ref={animRef}
        className="experience"
      >
        <div className="experience-header">
          <p className="company">{exp.company}</p>
        </div>

        <div className="experience-info">
          <div className="extra-informations">
            <p className="item-extra-info">
              <span>
                <img src={geo} alt="localization icon" />
              </span>
              {exp.location}
            </p>
            <p className="item-extra-info">
              <span>
                <img src={badge} alt="role icon" />
              </span>
              {exp.role}
            </p>
            <p className="item-extra-info">
              <span>
                <img src={calendar} alt="calendar icon" />
              </span>
              {exp.time}
            </p>
          </div>
          <div className="experience-description">
            {exp.description.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
            <div className="tech-tags">
              {exp.tags.map((tag, index) => {
                return (
                  <p className="tag" key={index}>
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
