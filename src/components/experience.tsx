import React from "react";
import { experiencesData } from "../data/exp";
import badge from "../assets/icons/person-badge.svg";
import geo from "../assets/icons/geo.svg";
import calendar from "../assets/icons/calendar.svg";

export function Experience() {
  return (
    <React.Fragment>
      {experiencesData.map((exp, index) => {
        return (
          <div className="experience" key={index}>
            <div className="experience-header">
              <p className="company">{exp.company}</p>
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
                  <span>
                    <img src={badge} alt="" />
                  </span>
                  {exp.role}
                </p>
                <p className="item-extra-info">
                  <span>
                    <img src={calendar} alt="" />
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
          </div>
        );
      })}
    </React.Fragment>
  );
}
