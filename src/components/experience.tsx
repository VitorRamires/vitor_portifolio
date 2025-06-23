import React from "react";
import { experiencesData } from "../data/exp";
import badge from "../assets/icons/person-badge.svg";
import geo from "../assets/icons/geo.svg";

export function Experience() {
  return (
    <React.Fragment>
      {experiencesData.map((exp) => {
        return (
          <div className="experience" key={exp.company + exp.role}>
            <div className="experience-header">
              <p className="company">{exp.company}</p>

              <div className="exp-header-left">
                <p className="atuation-time">{exp.time}</p>
                <div className="plus">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>

            <div className="experience-info">
              <div className="extra-informations">
                <p className="item-extra-info">
                  <span>
                    <img src={geo} alt="" />
                  </span>
                  {exp.location}
                </p>
                <p className="item-extra-info">
                  <img src={badge} alt="" />
                  {exp.role}
                </p>
              </div>
              <div className="experience-description">
                {exp.description.map((text) => {
                  return <p>{text}</p>;
                })}
                <div className="tech-tags">
                  {exp.tags.map((tag) => {
                    return (
                      <p className="tag" key={tag}>
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
