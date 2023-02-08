import { MdMovieCreation, MdLocalMovies } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbDeviceTvOld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import styles from "../styles/SideMenu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = () => {
  const router = useRouter();

  return (
    <div className={`${styles["side-menu"]}`}>
      <div className={`${styles["home-icon"]}`}>
        <Link href={"/"}>
          <MdMovieCreation />
        </Link>
      </div>
      <div className={`${styles["icons-container"]}`}>
        <div>
          <Link
            href={"/"}
            className={`${router.pathname === "/" ? styles["active"] : ""}`}
          >
            <RxDashboard />
          </Link>
        </div>
        <div>
          <Link
            href={"/movie"}
            className={`${
              router.pathname === "/movie" ? styles["active"] : ""
            }`}
          >
            <MdLocalMovies />
          </Link>
        </div>
        <div>
          <Link
            href={"/tv"}
            className={`${router.pathname === "/tv" ? styles["active"] : ""}`}
          >
            <TbDeviceTvOld />
          </Link>
        </div>
      </div>
      <div className={`${styles["profile-div"]}`}>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
