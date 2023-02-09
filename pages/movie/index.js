import Head from "next/head";
import React from "react";
import GenresComponent from "../../components/GenresComponent";
import EndPointFn from "../../utils/EndPointFn";

const MoviePage = ({ genres }) => {
  console.log("this is the genre", genres);
  return (
    <>
      <Head>
        <title>Movie Genres</title>
      </Head>
      <div>
        <h1 style={{ marginTop: "25px" }}>Movie Genres</h1>
        <GenresComponent genresArray={genres} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(EndPointFn(`/genre/movie/list`));
  const data = await response.json();
  return {
    props: {
      moath: "moath",
      genres: data.genres,
    },
  };
}

export default MoviePage;
