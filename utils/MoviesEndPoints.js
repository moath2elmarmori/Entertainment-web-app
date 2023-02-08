import EndPointFn from "./EndPointFn";

export const TRENDING_MOVIES_ENDPOINT = EndPointFn("/trending/movie/day");
export const POPULAR_MOVIES_ENDPOINT = EndPointFn("/movie/popular");
export const NOW_PLAYING_MOVIES_ENDPOINT = EndPointFn("/movie/now_playing");
export const UPCOMING_MOVIES_ENDPOINT = EndPointFn("/movie/upcoming");
export const TOP_RATED_MOVIES_ENDPOINT = EndPointFn("/movie/top_rated");
export const MOVIE_DETAILS_ENDPOINT = (MOVIE_ID) => {
  return EndPointFn(`/movie/${MOVIE_ID}`);
};
export const MOVIE_GENRE_SPECIFIC_ENDPOINT = (GENRE_ID, page = 1) => {
  return EndPointFn(`/discover/movie`, `&with_genres=${GENRE_ID}&page=${page}`);
};
