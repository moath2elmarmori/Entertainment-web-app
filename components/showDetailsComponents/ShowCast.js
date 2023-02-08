import styles from "../../styles/ShowCast.module.css";

const ShowCast = ({ cast }) => {
  return (
    <div className={`${styles["show-cast"]}`}>
      <h3>Cast</h3>
      <div className={`${styles["cast-boxes-container"]}`}>
        {cast.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default ShowCast;
