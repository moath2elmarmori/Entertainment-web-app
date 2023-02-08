const fetcherFn = (...args) => {
  // console.log("from fetcher", args);
  return fetch(...args).then((res) => res.json());
};

export default fetcherFn;
