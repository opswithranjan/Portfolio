import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import "./CareerTimeline.scss";
import {careerTimeline} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CareerTimeline() {
  const {isDark} = useContext(StyleContext);

  if (!careerTimeline.display) {
    return null;
  }

  return (
    <div className="career-main" id="experience">
      <div className="career-header">
        <h1
          className={
            isDark ? "dark-mode career-heading" : "career-heading"
          }
        >
          {careerTimeline.title}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode career-subtitle"
              : "career-subtitle subTitle"
          }
        >
          {careerTimeline.subtitle}
        </p>
      </div>

      <div className="timeline">
        {careerTimeline.milestones.map((milestone, i) => (
          <Fade direction="up" duration={800} triggerOnce key={i}>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div
                  className={
                    isDark ? "dark-mode timeline-dot" : "timeline-dot"
                  }
                >
                  {milestone.logo ? (
                    <img
                      src={milestone.logo}
                      alt={`${milestone.company} logo`}
                    />
                  ) : null}
                </div>
              </div>
              <div
                className={
                  isDark ? "dark-mode timeline-content" : "timeline-content"
                }
              >
                <div className="timeline-company-row">
                  <h2 className="timeline-company">{milestone.company}</h2>
                  <span className="timeline-period">{milestone.period}</span>
                </div>
                {milestone.location ? (
                  <p className="timeline-location">{milestone.location}</p>
                ) : null}
                {milestone.desc ? (
                  <p className="timeline-desc">{milestone.desc}</p>
                ) : null}
                <ul className="timeline-roles">
                  {milestone.roles.map((role, j) => (
                    <li className="timeline-role" key={j}>
                      <span className="timeline-role-title">{role.title}</span>
                      <span className="timeline-role-date">{role.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
