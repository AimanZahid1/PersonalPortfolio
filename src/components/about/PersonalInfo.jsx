import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Aiman" },
  { meta: "last name", metaInfo: "Zahid" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Faisalabad" },
  { meta: "phone", metaInfo: "+923000032480" },
  { meta: "Email", metaInfo: "aimanzahid657@mail.com" },
  { meta: "langages", metaInfo: " English, Urdu" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
