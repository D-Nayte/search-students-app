import Student from "@/components/Student";
import searchStudent from "@/lib/studentInformation";
import React, { useEffect, useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";

const Home = () => {
  const [active, setactive] = useState(false);
  const [query, setquery] = useState("");
  let filtered = searchStudent(query);
  const searchElem = useRef("");
  const headerElem = useRef("");

  const handleSearch = (input) => {
    const query = input.trim().replaceAll("-", "");
    setquery(query);
  };

  const handleScroll = (e) => {
    const searchBar = searchElem.current;
    const header = headerElem.current;
    if (searchBar && header) {
      const rect = searchBar?.getBoundingClientRect();
      const headerRect = header?.getBoundingClientRect();

      if (rect.top < 50 && !active) setactive(true);
      else if (headerRect.bottom > 180) setactive(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, query]);

  return (
    <>
      <header ref={headerElem} onResize={(e) => handleScroll(e)}>
        <div className="header-content">
          <div className="content-wrapper">
            <h1>
              Find possible candidates from Masterschool for
              <span className="black"> your Company</span>
            </h1>
            <p>
              Masterschool is a global network of success-based schools led by
              industry leaders. The immersive online training programs provide
              the skills and training needed to build a new career in tech.
              Masterschool programs include personal mentorship by industry
              leaders, a robust professional network, and guidance and support
              finding a job.
            </p>
          </div>
          <img className="hero-avatar" src="/AgamsPicture.jpg" alt="" />
        </div>
        <div
          ref={searchElem}
          onResize={(e) => handleScroll(e)}
          className={!active ? "search-wrapper" : "search-wrapper active"}>
          <CgSearch className="search-icon" />
          <input
            type="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Country, Role, Local, Remote"
          />
        </div>
      </header>

      <main>
        <ul className="students-wrapper">
          {filtered &&
            filtered.map((student, index) => (
              <li key={index}>
                <Student studentData={student} />
              </li>
            ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
