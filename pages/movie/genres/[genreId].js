import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavigatePages from "../../../components/NavigatePages";
import NotFound from "../../../components/NotFound";
import SectionContainer from "../../../components/SectionContainer";
import { MOVIE_GENRE_SPECIFIC_ENDPOINT } from "../../../utils/MoviesEndPoints";

const MovieGenresComponent = ({ theData, notFound }) => {
  const router = useRouter();
  console.log("the data moo3a", theData);

  if (notFound || !theData?.results) {
    return <NotFound />;
  }
  return (
    <>
      <Head>
        <title>{router.query.genreName} Movies</title>
      </Head>
      <div>
        <SectionContainer
          shows={theData.results}
          headingStatus={"movie"}
          headingTitle={router.query.genreName}
          showSeeMoreLink={false}
        />
        <NavigatePages
          disablePrev={theData.page === 1}
          disableNext={theData.page === theData.total_pages}
          textOfPages={`Page ${theData.page} Of ${theData.total_pages}`}
          nextPageUrl={`/movie/genres/${router.query.genreId}?genreName=${
            router.query.genreName
          }&page=${+theData.page + 1}`}
          prevPageUrl={`/movie/genres/${router.query.genreId}?genreName=${
            router.query.genreName
          }&page=${+theData.page - 1}`}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let pageNumber = context.query.page || 1;
  let response;
  try {
    response = await fetch(
      MOVIE_GENRE_SPECIFIC_ENDPOINT(context.params.genreId, pageNumber)
    );
    response = await response.json();
  } catch (error) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      moath: "moath",
      theData: response,
    },
  };
}

export default MovieGenresComponent;
