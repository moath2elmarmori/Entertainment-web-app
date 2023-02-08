import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import {
  AIRING_TODAY_TV_ENDPOINT,
  TOP_RATED_TV_ENDPOINT,
} from "../../utils/TVEndpoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const TopRatedTV = () => {
  const { isLoading, data } = useSWR(TOP_RATED_TV_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"tvseries"}
            headingTitle="Top Rated"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/tv/top_rated/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TopRatedTV;
