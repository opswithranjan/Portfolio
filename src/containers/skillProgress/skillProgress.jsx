import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">{techStack.title}</h1>
            {techStack.subtitle ? (
              <p className="tech-stack-subtitle subTitle">
                {techStack.subtitle}
              </p>
            ) : null}
            <div className="tech-stack-categories">
              {techStack.categories.map((category, i) => (
                <div className="tech-category" key={i}>
                  <h2 className="tech-category-title">{category.name}</h2>
                  <div className="tech-chips">
                    {category.skills.map((skill, j) => (
                      <span className="tech-chip" key={j}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={new URL("../../assets/images/skill.svg", import.meta.url).href}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
