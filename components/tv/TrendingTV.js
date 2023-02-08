import useSWR from "swr";

import SectionHeading from "../SectionHeading";
import LoadingSpinner from "../LoadingSpinner";
import SwiperComponent from "../SwiperComponent";
import fetcherFn from "../../utils/FetcherFn";
import { TRENDING_TV_ENDPOINT } from "../../utils/TVEndpoints";

const TrendingTV = () => {
  const { isLoading, data } = useSWR(TRENDING_TV_ENDPOINT, fetcherFn);

  return (
    <>
      <SectionHeading
        headingStatus={"tvseries"}
        headingTitle={"Trending"}
        seeMoreLinkUrl={"/tv/trending/1"}
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <SwiperComponent
          headingTitle="Trending"
          headingStatus={"tvseries"}
          showsArray={data.results}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TrendingTV;
