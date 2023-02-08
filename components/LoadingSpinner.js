import Image from "next/image";
import mySvg from "../icons/loading.svg";
import styles from "../styles/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${styles["loading-div"]}`}>
      <Image src={mySvg} alt="moea" width={50} height={50} />
    </div>
  );
};

export default LoadingSpinner;
