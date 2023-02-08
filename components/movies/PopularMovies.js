import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { POPULAR_MOVIES_ENDPOINT } from "../../utils/MoviesEndPoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const PopularMovies = () => {
  const { isLoading, data } = useSWR(POPULAR_MOVIES_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"movie"}
            headingTitle="Popular"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/movie/popular/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PopularMovies;
