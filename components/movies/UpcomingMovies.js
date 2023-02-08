import useSWR from "swr";

import fetcherFn from "../../utils/FetcherFn";
import { UPCOMING_MOVIES_ENDPOINT } from "../../utils/MoviesEndPoints";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";

const UpcomingMovies = () => {
  const { isLoading, data } = useSWR(UPCOMING_MOVIES_ENDPOINT, fetcherFn);
  return (
    <>
      {/* <SectionHeading headingStatus={"movie"} headingTitle="Popular" /> */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && data ? (
        <>
          <SectionContainer
            headingStatus={"movie"}
            headingTitle="Upcoming"
            shows={data.results}
            makeShowsLengthEight={true}
            seeMoreLinkUrl={"/movie/upcoming/1"}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UpcomingMovies;
