import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { POPULAR_TV_ENDPOINT } from "../../utils/TVEndpoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const PopularTV = () => {
  const { isLoading, data } = useSWR(POPULAR_TV_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"tvseries"}
            headingTitle="Popular"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/tv/popular/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PopularTV;
