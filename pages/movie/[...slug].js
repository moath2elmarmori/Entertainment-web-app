import { useRouter } from "next/router";
import SectionHeading from "../../components/SectionHeading";
import SectionContainer from "../../components/SectionContainer";
import NavigatePages from "../../components/NavigatePages";
import NotFound from "../../components/NotFound";
import EndPointFn from "../../utils/EndPointFn";
import Head from "next/head";

const MovieSlug = ({ comingData, notFound, error }) => {
  const { query } = useRouter();

  let genre;
  let page;
  if (query.slug) {
    genre = query.slug[0];
    page = query.slug[1];
  }

  // console.log("this is the coming data", comingData);
  console.log("the genere", genre);
  console.log("the error obj", error);

  const pageTitle = genre
    .split("_")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");

  if (notFound) {
    return <NotFound />;
  }
  return (
    <>
      <Head>
        <title>{pageTitle} Movies</title>
      </Head>
      <div>
        {/* <SectionHeading headingStatus={"movie"} headingTitle={genre} /> */}
        <SectionContainer
          shows={comingData.results}
          headingStatus={"movie"}
          headingTitle={genre.split("_").join(" ")}
          showSeeMoreLink={false}
        />
        <NavigatePages
          disablePrev={comingData.page === 1}
          disableNext={comingData.page === comingData.total_pages}
          textOfPages={`Page ${comingData.page} Of ${comingData.total_pages}`}
          nextPageUrl={`/movie/${genre}/${+page + 1}`}
          prevPageUrl={`/movie/${genre}/${+page - 1}`}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  // console.log("####", params);
  const genre = params.slug[0];
  const page = params.slug[1];
  let endPointFirstParameter;
  if (genre === "trending") {
    console.log("TRending hhhh");
    endPointFirstParameter = `/trending/movie/day`;
  } else {
    endPointFirstParameter = `/movie/${genre}`;
  }
  try {
    const response = await fetch(
      EndPointFn(endPointFirstParameter, `&page=${page}`)
    );
    if (!response.ok) {
      throw new Error(response);
    }

    const theData = await response.json();

    return {
      props: {
        moath: "moath",
        comingData: theData,
      },
    };
  } catch (error) {
    console.log("this is the error", error.message);
    return {
      props: {
        notFound: true,
      },
    };
  }
}

export default MovieSlug;
