import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import styles from "../styles/ShowBox.module.css";
import BasicImageUrl from "../utils/BasicImageURL";

const ShowBox = ({ headingStatus, headingTitle, showInfo }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`${styles["show-box"]}`}
      onClick={(e) => {
        console.log("the router", router, showInfo);
        if (headingStatus === "movie" || showInfo.media_type === "movie") {
          router.push(`/movie/${showInfo.id}`);
        } else {
          router.push(`/tv/${showInfo.id}`);
        }
      }}
    >
      <div
        className={`${styles["image-div"]} ${
          isImageLoaded ? "" : styles["not-loaded-yet"]
        }`}
      >
        <Image
          className={``}
          src={`${BasicImageUrl}${showInfo.backdrop_path}`}
          alt={showInfo?.title || showInfo?.name}
          width={300}
          height={175}
          onLoad={(e) => {
            setIsImageLoaded(true);
          }}
        />
      </div>
      <div className={`${styles["show-info-div"]}`}>
        <div>
          <p>
            {showInfo?.release_date?.slice(0, 4) ||
              showInfo?.first_air_date?.slice(0, 4)}
          </p>
          <div className={`${styles["icon-div"]}`}>
            {headingStatus === "movie" ? <MdLocalMovies /> : <TbDeviceTvOld />}
          </div>
          <p>
            {showInfo.media_type === "movie" || headingStatus === "movie"
              ? "Movie"
              : "TV Series"}
          </p>
          {/* <p>{headingStatus === "movie" ? "Movie" : "TV Series"}</p> */}
        </div>
        <h2 className={`${styles["show-name"]}`}>
          {showInfo?.title || showInfo?.name}
        </h2>
      </div>
    </div>
  );
};

export default ShowBox;
