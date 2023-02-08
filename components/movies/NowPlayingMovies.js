import useSWR from "swr";
import SectionContainer from "../SectionContainer";
import fetcherFn from "../../utils/FetcherFn";
import { NOW_PLAYING_MOVIES_ENDPOINT } from "../../utils/MoviesEndPoints";
import LoadingSpinner from "../LoadingSpinner";

const NowPlayingMovies = () => {
  const { isLoading, data } = useSWR(NOW_PLAYING_MOVIES_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"movie"}
            headingTitle="Now Playing"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/movie/now_playing/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default NowPlayingMovies;
