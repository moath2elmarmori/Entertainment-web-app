import Link from "next/link";

import styles from "../styles/SectionHeading.module.css";

const SectionHeading = ({
  headingTitle,
  headingStatus,
  showSeeMoreLink,
  seeMoreLinkUrl,
}) => {
  return (
    <div className={`${styles["heading"]}`}>
      <div className={`${styles["heading-left-section"]}`}>
        <h1>{headingTitle}</h1>
        <p className={`${styles[headingStatus]}`}>
          {headingStatus === "movie" ? "movie" : "tv series"}
        </p>
      </div>
      {showSeeMoreLink !== false && (
        <div className={`${styles["heading-right-section"]}`}>
          <Link href={`${seeMoreLinkUrl ? seeMoreLinkUrl : "#"}`}>
            SEE MORE
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
