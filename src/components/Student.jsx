import Image from "next/image";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BiCopy } from "react-icons/bi";

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
  const [copyed, setcopyed] = useState(false);
  const copyToClipboard = (email) => {
    setcopyed(true);
    setTimeout(() => {
      setcopyed(false);
    }, 3000);
    navigator.clipboard.writeText(email);
  };

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
          <div className="email-wrapper" onClick={() => copyToClipboard(email)}>
            <p className={copyed ? "copyed" : null}>{email}</p>
            <BiCopy className="copy" />
          </div>
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
          <h2>Location(s)</h2>
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
