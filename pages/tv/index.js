import EndPointFn from "../../utils/EndPointFn";
import GenresComponent from "../../components/GenresComponent";
import Head from "next/head";

const TVPage = ({ genres }) => {
  return (
    <>
      <Head>
        <title>TV Genres</title>
      </Head>
      <div>
        <h1>TV Genres</h1>
        <GenresComponent genresOf={"series"} genresArray={genres} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(EndPointFn(`/genre/tv/list`));
  const data = await response.json();
  return {
    props: {
      moath: "moath",
      genres: data.genres,
    },
  };
}

export default TVPage;
