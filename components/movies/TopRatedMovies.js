import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { TOP_RATED_MOVIES_ENDPOINT } from "../../utils/MoviesEndPoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const TopRatedMovies = () => {
  const { isLoading, data } = useSWR(TOP_RATED_MOVIES_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"movie"}
            headingTitle="Top Rated"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/movie/top_rated/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TopRatedMovies;
