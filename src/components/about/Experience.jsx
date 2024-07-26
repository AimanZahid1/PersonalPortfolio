import React from "react";

const experienceContent = [
  {
    year: "2022 - 2023",
position: "Teacher Assistant",
compnayName: "FAST-NUCES",
details: `As a Teacher Assistant at FAST-NUCES, I assisted professors in preparing course materials, grading assignments, and providing support to students during lab sessions. I also conducted study groups and tutoring sessions to help students understand complex concepts and improve their academic performance.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
