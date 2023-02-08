import useSWR from "swr";

import SectionHeading from "../SectionHeading";
import LoadingSpinner from "../LoadingSpinner";
import SwiperComponent from "../SwiperComponent";
import fetcherFn from "../../utils/FetcherFn";
import { TRENDING_MOVIES_ENDPOINT } from "../../utils/MoviesEndPoints";

const TrendingMovies = () => {
  const { isLoading, error, data } = useSWR(
    TRENDING_MOVIES_ENDPOINT,
    fetcherFn
  );

  console.log(
    "the env",
    process.env.NEXT_PUBLIC_API_KEY,
    TRENDING_MOVIES_ENDPOINT
  );

  if (isLoading) {
    console.log("loading");
  }
  if (error) {
    console.log("error", error);
  }
  if (data) {
    console.log("data", data);
  }
  return (
    <>
      <SectionHeading
        headingStatus={"movie"}
        headingTitle={"trending"}
        seeMoreLinkUrl={"/movie/trending/1"}
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <SwiperComponent
          headingTitle="trending"
          headingStatus="movie"
          showsArray={data.results}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TrendingMovies;
