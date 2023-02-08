import Head from "next/head";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={`${styles["not-found"]}`}>
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
