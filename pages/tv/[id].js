import Image from "next/image";
import { ImLink } from "react-icons/im";
import { FaImdb } from "react-icons/fa";
import ShowCast from "../../components/showDetailsComponents/ShowCast";
import ShowGenres from "../../components/showDetailsComponents/ShowGenres";
import ShowInfo from "../../components/showDetailsComponents/ShowInfo";
import StarsRating from "../../components/showDetailsComponents/StarsRating";

import styles from "../../styles/ShowDetails.module.css";
import { MOVIE_DETAILS_ENDPOINT } from "../../utils/MoviesEndPoints";
import BasicImageUrl from "../../utils/BasicImageURL";
import NotFound from "../../components/NotFound";
import Head from "next/head";
import { useState } from "react";
import { TV_DETAILS_ENDPOINT } from "../../utils/TVEndpoints";

const MovieDetailsPage = ({ showInfo, showCredits, notFound }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  console.log("this is the show info", showInfo);
  if (notFound) return <NotFound />;
  return (
    <>
      <Head>
        <title>
          {showInfo.title || showInfo.name || showInfo.original_name}
        </title>
      </Head>
      <div className={`${styles["show-details-container"]} `}>
        <div
          className={`${styles["image-div"]} ${
            isImageLoaded ? "" : styles["not-loaded-yet"]
          }`}
        >
          <Image
            src={`${BasicImageUrl}${showInfo.poster_path}`}
            alt={showInfo.title}
            width={350}
            height={530}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div className={`${styles["content-container"]}`}>
          <h1 className={`${styles["show-name"]}`}>
            {showInfo.title || showInfo.name || showInfo.original_name}
          </h1>
          <p className={`${styles["show-tagline"]}`}>{showInfo.tagline}</p>
          <StarsRating starsRating={+(showInfo.vote_average / 2).toFixed(1)} />
          <ShowInfo showInfo={showInfo} showType="tvseries" />
          <ShowGenres showGenres={showInfo.genres} />
          <div className={`${styles["show-synopsis"]}`}>
            <h3>Synopsis</h3>
            <p>{showInfo.overview}</p>
          </div>
          <ShowCast cast={showCredits.cast} />
          <div className={`${styles["buttons-div"]}`}>
            {showInfo.homepage && (
              <button
                onClick={(e) => {
                  window.open(showInfo.homepage);
                }}
              >
                <p>Website</p>
                <ImLink />
              </button>
            )}
            {showInfo.imdb_id && (
              <button
                onClick={(e) =>
                  window.open(`https://www.imdb.com/title/${showInfo.imdb_id}`)
                }
              >
                <p>IMDB</p>
                <FaImdb />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("###########");
  const { params } = context;
  const tvDetailsResponse = await fetch(TV_DETAILS_ENDPOINT(params.id));
  const tvDetailsData = await tvDetailsResponse.json();

  if (tvDetailsData?.success === false) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  const tvCreditsRespnse = await fetch(
    TV_DETAILS_ENDPOINT(`${params.id}/credits`)
  );
  const tvCreditsData = await tvCreditsRespnse.json();
  console.log("###########");

  return {
    props: {
      showInfo: tvDetailsData,
      showCredits: tvCreditsData,
    },
  };
}

export default MovieDetailsPage;
