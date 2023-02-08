import Image from "next/image";
import Link from "next/link";

import styles from "../styles/SectionContainer.module.css";
import SectionHeading from "./SectionHeading";
import ShowBox from "./ShowBox";

const SectionContainer = ({
  headingTitle,
  headingStatus,
  shows,
  makeShowsLengthEight,
  showSeeMoreLink,
  seeMoreLinkUrl,
  showSectionHeading,
}) => {
  console.log("this is the shows", shows);
  if (makeShowsLengthEight) {
    shows.length = 8;
  }
  return (
    <section className={`${styles["section-container"]}`}>
      {showSectionHeading === false ? (
        ""
      ) : (
        <SectionHeading
          headingStatus={headingStatus}
          headingTitle={headingTitle}
          showSeeMoreLink={showSeeMoreLink}
          seeMoreLinkUrl={seeMoreLinkUrl}
        />
      )}

      <div className={`${styles["section-content"]}`}>
        <div className={`${styles["boxes-container"]}`}>
          {shows.map((show) => (
            <ShowBox
              key={show.id}
              headingStatus={headingStatus}
              headingTitle={headingTitle}
              showInfo={show}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
