import React from "react";

const educationContent = [
  {
    year: "2021",
degree: "SOFTWARE ENGINEERING DEGREE",
institute: "National University of Computer & Emerging Science [FAST NUCES]",
details: `I completed my degree with a focus on software development, data structures, algorithms, and system design. During my time at the university, I participated in various projects and internships that helped me gain practical experience in the field.`,
  },
  {
    year: "2020",
degree: "COLLEGE DEGREE",
institute: "PUNJAB COLLEGE",
details: `I completed my college degree with a strong emphasis on foundational subjects such as mathematics, physics, and computer science. During my time at Punjab College, I actively participated in various academic and extracurricular activities, which helped me develop a well-rounded skill set and a passion for continuous learning.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
