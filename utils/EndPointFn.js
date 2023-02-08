const EndPointFn = (endPoint, queryParameter = "") =>
  `https://api.themoviedb.org/3${endPoint}?api_key=${process.env.NEXT_PUBLIC_API_KEY}${queryParameter}`;

export default EndPointFn;
