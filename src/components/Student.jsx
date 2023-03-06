import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const Student = ({ studentData }) => {
  const {
    firstname,
    lastName,
    descr,
    frontEndPosition,
    backEndPosition,
    fullstackPosition,
    remote,
    local,
    links,
    email,
    image,
    country,
    countryCode,
  } = studentData;
  return (
    <article className="student-wrapper">
      <div>
        <Image
          src={image || "/studentImages/avatarPlaceholder.png"}
          alt=""
          fill="true"
          sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 30vw,
              33vw"
        />
      </div>
      <ul className="info-wrapper">
        <li>
          <h1>
            {firstname} {lastName} <span className="country">{country}</span>{" "}
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{
                fontSize: ".5em",
              }}
            />
          </h1>
        </li>
        <li>
          <h2>Email</h2>
          <p>{email}</p>
        </li>
        <li>
          <h2>About me</h2>
          <p>{descr}</p>
        </li>
        <li>
          <h2> Desired Role(s):</h2>
          <p>
            {frontEndPosition && "#frontend "}
            {backEndPosition && "#backend "}
            {fullstackPosition && "#fullstack "}
          </p>
        </li>
        <li>
          <h2>Loacation(s)</h2>
          <p>{remote && local ? "#hybrid" : remote ? "#remote " : "#local"}</p>
        </li>

        <li>
          <h2>Links</h2>
          <ul className="links-wrapper">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default Student;
