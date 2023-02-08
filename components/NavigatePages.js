import { useRouter } from "next/router";
import Link from "next/link";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import styles from "../styles/NavigatePages.module.css";

const NavigatePages = ({
  disablePrev,
  disableNext,
  textOfPages,
  nextPageUrl,
  prevPageUrl,
}) => {
  const router = useRouter();
  return (
    <div className={`${styles["navigate-pages-div"]}`}>
      <div>
        <div>
          <Link
            className={`${disablePrev ? styles["disabled"] : ""}`}
            // disabled={disablePrev}
            href={prevPageUrl}
            // onClick={() => router.push(prevPageUrl)}
          >
            <HiOutlineArrowNarrowLeft /> Prev
          </Link>
        </div>
        <div>
          {" "}
          <p>{textOfPages}</p>
        </div>
        <div>
          <Link
            className={`${disableNext ? styles["disabled"] : ""}`}
            // disabled={disableNext}
            href={nextPageUrl}
            // onClick={() => router.push(nextPageUrl)}
          >
            <HiOutlineArrowNarrowRight /> Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigatePages;
