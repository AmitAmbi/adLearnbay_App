"use client";
import React, { useRef, useState } from "react";
import Reeldata from "./Reeldata";
import VideoPopup from "@/app/components/global/videoPopup/VideoPopup";
import styles from "./ReviewSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { MdOutlineKeyboardArrowLeftSvg, MdOutlineKeyboardArrowRightSvg } from "@/Data/svgData/MDIcons";

const Reels = () => {
  const reelswiperRef = useRef(null);
  const [swap, setSwap] = useState(false);

  const nextreelSlide = () => {
    reelswiperRef.current.slideNext();
    if (!swap) setSwap(true);
  };

  const prevreelSlide = () => {
    reelswiperRef.current.slidePrev();
    if (swap) setSwap(false);
  };

  const [vId, setVId] = useState("");
  const [video, setVideo] = useState(false);

  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };

  return (
    <>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <div className={styles.headingContainer}>
        <div className={styles.Header}>

          <h2>
            Real Stories, <span className={styles.topSpan}>Real Success</span>
            <hr className={styles.topSpanHrLine}/>
          </h2>
          <p className={styles.subHeading}>
            Discover what our learners say about us
          </p>
        </div>
        {/* Custom Navigation Buttons */}
        <div className={styles.btnContainer}></div>

        <div className={styles.mainContiner}>
          <div className={styles.prevBtn} onClick={prevreelSlide}>
            <MdOutlineKeyboardArrowLeftSvg />
          </div>
          <Swiper
            onSwiper={(swiper) => {
              reelswiperRef.current = swiper;
            }}

            slidesPerView={4}
            spaceBetween={20}
            className={styles.mySwiper}
            breakpoints={{
              320: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              361: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              481: {
                slidesPerView: 4.2,
                spaceBetween: 20,
              },
              641: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              // 761: {
              //   slidesPerView: 4.2,
              //   spaceBetween: 20,
              // },
              841: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1081: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1181: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1281: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {Reeldata.map((item, id) => (
              <SwiperSlide key={id} className={styles.sliderWrapper}>
                <Image
                  src={item.proimage}
                  alt="Learnbay"
                  loading="lazy"
                  width={180}
                  height={200}
                  className={styles.videoImage}
                  onClick={() => videoShow(item.link)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.nextBtn} onClick={nextreelSlide}>
            <MdOutlineKeyboardArrowRightSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reels;
