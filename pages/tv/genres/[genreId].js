import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavigatePages from "../../../components/NavigatePages";
import NotFound from "../../../components/NotFound";
import SectionContainer from "../../../components/SectionContainer";
import { TV_GENRE_SPECIFIC_ENDPOINT } from "../../../utils/TVEndpoints";

const TVGenresComponent = ({ theData, notFound }) => {
  const router = useRouter();
  console.log("not found", notFound, router.query);
  console.log("the data moo3a", theData);

  if (notFound || !theData?.results) {
    return <NotFound />;
  }
  return (
    <>
      <Head>
        <title>{router.query.genreName || ""} Series</title>
      </Head>
      <div>
        <SectionContainer
          shows={theData.results}
          headingStatus={"tvseries"}
          headingTitle={router.query.genreName}
          showSeeMoreLink={false}
        />
        <NavigatePages
          disablePrev={theData.page === 1}
          disableNext={theData.page === theData.total_pages}
          textOfPages={`Page ${theData.page} Of ${theData.total_pages}`}
          nextPageUrl={`/tv/genres/${router.query.genreId}?genreName=${
            router.query.genreName
          }&page=${+theData.page + 1}`}
          prevPageUrl={`/tv/genres/${router.query.genreId}?genreName=${
            router.query.genreName
          }&page=${+theData.page - 1}`}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let pageNumber = context.query?.page || 1;
  let response;
  console.log("mooat");
  console.log(context.params, context.query);
  try {
    response = await fetch(
      TV_GENRE_SPECIFIC_ENDPOINT(context.params?.genreId, pageNumber)
    );
    response = await response.json();
  } catch (error) {
    console.log("error");
    console.log("#########");
    console.log(error);
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      theData: response,
    },
  };
}

export default TVGenresComponent;
