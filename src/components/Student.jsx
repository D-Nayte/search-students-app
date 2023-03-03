import Image from "next/image";
import React from "react";

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
  } = studentData;
  return (
    <article className="student-wrapper">
      <div>
        <Image
          src={studentData.image || "/studentImages/avatarPlaceholder.png"}
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
            {firstname} {lastName} <span className="country">{country}</span>
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
            {frontEndPosition && "Frontend "}
            {backEndPosition && "Backend "} {fullstackPosition && "Fullstack"}
          </p>
        </li>
        <li>
          <h2>Loacation(s)</h2>
          <p>
            {remote && "Remote "} {local && "Local"}
          </p>
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
