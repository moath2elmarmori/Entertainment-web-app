import EndPointFn from "./EndPointFn";

export const TRENDING_TV_ENDPOINT = EndPointFn("/trending/tv/day");
export const POPULAR_TV_ENDPOINT = EndPointFn("/tv/popular");
export const AIRING_TODAY_TV_ENDPOINT = EndPointFn("/tv/airing_today");
export const ON_THE_AIR_TV_ENDPOINT = EndPointFn("/tv/on_the_air");
export const TOP_RATED_TV_ENDPOINT = EndPointFn("/tv/top_rated");
export const TV_DETAILS_ENDPOINT = (TV_ID) => {
  return EndPointFn(`/tv/${TV_ID}`);
};
export const TV_GENRE_SPECIFIC_ENDPOINT = (GENRE_ID, page = 1) => {
  return EndPointFn(`/discover/tv`, `&with_genres=${GENRE_ID}&page=${page}`);
};
