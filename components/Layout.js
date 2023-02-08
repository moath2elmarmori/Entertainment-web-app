import React, { useState } from "react";
import Image from "next/image";
import { BiEraser, BiSearch } from "react-icons/bi";
import SideMenu from "./SideMenu";
import styles from "../styles/Layout.module.css";
import EndPointFn from "../utils/EndPointFn";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const searchRequest = async (inputVal) => {
    // const res = await fetch(EndPointFn(`/search/multi`, `&query=${inputVal}`));
    // const data = await res.json();
    // const movie = console.log("this is the data from search", data);
    router.push(`/search/${inputVal}?page=1`);
    setInputValue("");
  };
  return (
    <div>
      {/* <h1>Layout</h1> */}
      <div className={`${styles["layout-container"]}`}>
        <SideMenu />
        <div className={`${styles["content-container"]}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchRequest(inputValue);
            }}
          >
            <div className={`${styles["search-div"]}`}>
              <div className={`${styles["icon-div"]}`}>
                <BiSearch />
              </div>
              <div className={`${styles["input-div"]}`}>
                <input
                  type={"text"}
                  placeholder="Search For Movies Or TV Series"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div className={`${styles["button-div"]}`}>
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
          <section className="content-section">{children}</section>
          <footer>
            <h4>Powered by</h4>
            <div className={`${styles["footer-image-div"]}`}>
              <Image
                src={
                  "https://hy-entertainment.netlify.app/_next/static/media/icon-tmdb-long.72aae4fd.svg"
                }
                alt="TMDB Logo"
                width={150}
                height={20}
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
