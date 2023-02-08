import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { ON_THE_AIR_TV_ENDPOINT } from "../../utils/TVEndpoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const OnAirTV = () => {
  const { isLoading, data } = useSWR(ON_THE_AIR_TV_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"tvseries"}
            headingTitle="On Air"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/tv/on_the_air/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default OnAirTV;
