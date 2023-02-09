import styles from "../../styles/ShowInfo.module.css";

const ShowInfo = ({ showInfo, showType }) => {
  return (
    <div className={`${styles["show-info"]}`}>
      <div>
        <h3>{showType === "tvseries" ? "Number Of Episodes" : "Length"}</h3>
        <p>
          {showType === "tvseries"
            ? `${showInfo.number_of_episodes || "-"}`
            : `${showInfo?.runtime} min`}{" "}
        </p>
      </div>
      <div>
        <h3>Language</h3>
        <p className={`${styles["show-lang"]}`}>
          {showInfo?.original_language}
        </p>
      </div>
      <div>
        <h3>Year</h3>
        <p>
          {showInfo?.release_date?.split("-")[0] ||
            showInfo?.first_air_date?.slice(0, 4)}
        </p>
      </div>
      <div>
        <h3>Status</h3>
        <p>{showInfo?.status}</p>
      </div>
    </div>
  );
};

export default ShowInfo;
