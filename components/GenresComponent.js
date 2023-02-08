import { useRouter } from "next/router";
import styles from "../styles/GenresComponent.module.css";

const GenresComponent = ({ genresOf, genresArray }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles["genre-boxes-container"]} ${
        genresOf === "series" ? styles["series"] : ""
      }`}
    >
      {genresArray.map((genre) => (
        <div
          key={genre.id}
          className={`${styles["genre-box"]}`}
          onClick={() => {
            if (genresOf !== "series") {
              return router.push(
                `/movie/genres/${genre.id}?genreName=${genre.name}&page=1`
              );
            }
            router.push(
              `/tv/genres/${genre.id}?genreName=${genre.name}&page=1`
            );
          }}
        >
          <h1>{genre.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default GenresComponent;
