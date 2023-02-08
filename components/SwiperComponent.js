import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "../styles/SwiperExample.module.css";
import BasicImageUrl from "../utils/BasicImageURL";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useRouter } from "next/router";

export default function SwiperComponent({
  headingStatus,
  headingTitle,
  showsArray,
}) {
  const router = useRouter();
  console.log("this is from SwiperComponent", showsArray, BasicImageUrl);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {showsArray.map((obj) => (
          <SwiperSlide className={`${styles["swiper-item"]}`} key={obj.id}>
            <div
              className={`${styles["show-box"]}`}
              onClick={(e) => {
                console.log("the router", router, headingStatus);
                if (headingStatus === "movie") {
                  router.push(`/movie/${obj.id}`);
                } else {
                  router.push(`/tv/${obj.id}`);
                }
              }}
            >
              <Image
                src={`${BasicImageUrl}${obj.backdrop_path}`}
                alt={`${obj.title} Poster`}
                width={400}
                height={225}
              />
              <div className={`${styles["show-info-div"]}`}>
                <div>
                  <p>
                    {obj.release_date?.slice(0, 4) ||
                      obj?.first_air_date?.slice(0, 4)}
                  </p>
                  <div className={`${styles["icon-div"]}`}>
                    {obj.media_type === "movie" ? (
                      <MdLocalMovies />
                    ) : (
                      <TbDeviceTvOld />
                    )}
                  </div>
                  <p>{obj.media_type === "movie" ? "Movie" : "TV Series"}</p>
                </div>
                <h2 className={`${styles["show-name"]}`}>
                  {obj.title || obj.name}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
