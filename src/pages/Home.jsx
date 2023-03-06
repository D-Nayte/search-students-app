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
  const masterschoolURL =
    "https://www.masterschool.com/?kw=masterschool&cpn=16606269324&utm_source=google&utm_medium=paid&utm_campaign=16606269324&utm_id=16606269324&utm_term=masterschool&utm_content=637273850534&campaignid=16606269324&hsa_acc=2781550509&hsa_cam=16606269324&hsa_grp=131597631581&hsa_ad=637273850534&hsa_net=google&hsa_src=g&hsa_ver=3&hsa_mt=e&hsa_kw=masterschool&hsa_tgt=kwd-389013915334&gclid=CjwKCAiAu5agBhBzEiwAdiR5tInm3RWAw-cn7DWbVzYxp9LlyMqD7p1Iow8h8Ng6D6XDp6OtkbrJnxoCNdsQAvD_BwE";

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
              Find possible candidates from{" "}
              <a href={masterschoolURL} target="_blank">
                Masterschool
              </a>{" "}
              for
              <span className="black"> your Company</span>
            </h1>
            <p>
              Hey! My name is{" "}
              <a href="https://www.linkedin.com/in/agamm/" target="_blank">
                Agam More
              </a>{" "}
              . I've personally trained and mentored all the amazing people
              listed here. If you want a highly motivated, vetted full stack
              developer - reach out to them (ps. Check their live github
              projects to see how good they are)
            </p>
          </div>
          <img className="hero-avatar" src="/heroAvatar.jpg" alt="" />
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
