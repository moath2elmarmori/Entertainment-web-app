import styles from "../../styles/ShowInfo.module.css";

const ShowInfo = ({ showInfo }) => {
  return (
    <div className={`${styles["show-info"]}`}>
      <div>
        <h3>Length</h3>
        <p>{showInfo?.runtime} min</p>
      </div>
      <div>
        <h3>Language</h3>
        <p>{showInfo?.original_language}</p>
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
