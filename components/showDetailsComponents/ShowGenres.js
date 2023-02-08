import styles from "../../styles/ShowGenres.module.css";

const ShowGenres = ({ showGenres }) => {
  return (
    <div className={`${styles["show-genres"]}`}>
      <h3>Genres</h3>
      <div className={`${styles["genre-boxes-container"]}`}>
        {showGenres.map((genre) => (
          <p className={`${styles["genre-box"]}`} key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShowGenres;
