import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { AIRING_TODAY_TV_ENDPOINT } from "../../utils/TVEndpoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const AiringTodayTV = () => {
  const { isLoading, data } = useSWR(AIRING_TODAY_TV_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"tvseries"}
            headingTitle="Airing Today"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/tv/airing_today/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AiringTodayTV;
