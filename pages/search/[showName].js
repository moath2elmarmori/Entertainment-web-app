import Head from "next/head";
import SectionContainer from "../../components/SectionContainer";
import NavigatePages from "../../components/NavigatePages";
import EndPointFn from "../../utils/EndPointFn";

const ShowName = ({ searchData, searchText }) => {
  console.log("this is the search data", searchData);
  return (
    <>
      <Head>
        <title>Entertainment Web App</title>
      </Head>
      <div>
        <h1
          style={{ marginTop: "25px" }}
        >{`Found ${searchData.total_results} Results For '${searchText}' `}</h1>
        {/* <SectionHeading headingStatus={"movie"} headingTitle={genre} /> */}
        <SectionContainer
          shows={searchData.results}
          showSectionHeading={false}
          //   headingStatus={"movie"}
          //   headingTitle={genre.split("_").join(" ")}
          //   headingTitle={`Results For ${searchText}`}
          showSeeMoreLink={false}
        />
        <NavigatePages
          disablePrev={searchData.page === 1}
          disableNext={searchData.page === searchData.total_pages}
          textOfPages={`Page ${searchData.page} Of ${searchData.total_pages}`}
          nextPageUrl={`/search/${searchText}?page=${+searchData.page + 1}`}
          prevPageUrl={`/search/${searchText}?page=${+searchData.page - 1}`}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { showName } = params;
  const {
    query: { page },
  } = context;
  console.log("this is the params", page);
  const res = await fetch(
    EndPointFn(`/search/multi`, `&query=${showName}&page=${page}`)
  );
  const data = await res.json();
  console.log("after", page);
  console.log("#########");

  return {
    props: {
      searchData: data,
      searchText: showName,
    },
  };
}

export default ShowName;
