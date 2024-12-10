"use client";

import React, { useState, useMemo, memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { useMediaQuery } from "react-responsive";
const PopupContent = dynamic(() => import("../../global/popup/PopupContent"), {
  ssr: false,
});
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/MDIcons";
const HeroSection = memo(
  ({
    dataScience,
    radio,
    dataScienceCounselling,
    interstedInHide,
    idss,
    btnHide,
    dataScienceGeneric,
  }) => {
    const popupShow = () => {
      setPopups(true);
    };

    const isMobile = useMediaQuery({ query: "(max-width: 641px)" });

    const typeLogo = useMemo(() => {
      return isMobile
        ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/type_logo_mbl.webp"
        : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp";
    }, [isMobile]);

    const [popups, setPopups] = useState(false);
    return (
      <section className={styles.container}>
        <div className="containerWidth">
          <PopupContent
            dataScience={dataScience}
            radio={radio}
            dataScienceCounselling={dataScienceCounselling}
            dataScienceGeneric={dataScienceGeneric}
            popups={popups}
            setPopups={setPopups}
            interstedInHide={interstedInHide}
            heading="Download Syllabus"
            learning={true}
          />
          <div className={styles.gridConteiner}>
            <div className={styles.leftside}>
              <h1>
                India’s{" "}
                <span className={styles.spantitle}>#1 Project-based</span>{" "}
                Upskilling Platform for Professionals
              </h1>

              <div className={styles.listleft}>
                <div className={styles.pointsDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                    width={25}
                    height={25}
                    alt="icon"
                    loading="lazy"
                    quality={80}
                  />
                  <p>
                    Get ready to crack your{" "}
                    <span className={styles.orgleft}>dream job</span> interview
                  </p>
                </div>
                <div className={styles.pointsDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                    width={25}
                    height={25}
                    alt="icon"
                    loading="lazy"
                    quality={80}
                  />

                  <p>
                    {" "}
                    Learn from industry experts on{" "}
                    <span className={styles.orgleft}>real projects</span>
                  </p>
                </div>
              </div>
              <button className={styles.btn} onClick={popupShow}>
                Download Syllabus <MdOutlineFileDownloadSvg />
              </button>
            </div>

            <div className={styles.rytSide}>
              <div className={styles.rytConteiner}>
                <div className={styles.greenTag}>
                  <svg
                    height="40"
                    width="92"
                    fill="none"
                    viewBox="0 0 92 59"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="59"
                      width="92"
                      fill="url(#pattern0_137_3837)"
                    />
                    <defs>
                      <pattern
                        height="1"
                        id="pattern0_137_3837"
                        width="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use
                          transform="matrix(0.00641304 0 0 0.01 0.179348 0)"
                          xlinkHref="#image0_137_3837"
                        />
                      </pattern>
                      <image
                        height="100"
                        id="image0_137_3837"
                        width="100"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR4nO2WMWsUQRiGRzAWgo2NlY2lnVwTQmYOoo0B/4LldZl3FcQy/gVbS0srUdidQ0GwlFRaCQpiSGVhKQGPyAZtREku7ub7Rp4Htt69e95nd0IAAABwSm7TpkrcVUkHdV9xV/N0M9TO/yEjHV65S59D7Vj/iRr4CrVj/QcKIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSEIcY31okUhCHGN9aJFIQhxjfWiRSGnKySXtMhdfHR4lbRAiGkh8c1WO139da+tNl3LJb6mkNMW0qU9lXQ7HIQzf7pnM0+3VOInXlkjC8kl7ecSH957unbhqDJnzybn1cUH6uK3IZ8h1M6AVTxvXqxfWfb+d0u8rBIfI2QgIbmk97lNm/86jGYeN3KJbynkpCK6+FUl3d9+cvVcGIjtV9OzeZ5mucQvvLKOX8Sif8XklxuXwkjcKasX+2+RSvzON2SJY+zYnOSYHGpniGPs2CxzTA61M9QxdmyOe0wOtTP0MXZsjjomh9rJXfo4xjF2bPpjsrr47rdv3IdQO003vdH/kJ9XM9uZrIRKmO1MVvpn7p+9H1Zu169bPxMAAED4Cz8AJEjYNmn1AMMAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </div>
                <h2>Check your eligibility!</h2>
                <hr className={styles.hr} />

                <div className={styles.spandiv}>
                  <div className={styles.listryt}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/job_seeker.webp"
                      width={25}
                      height={25}
                      alt="jobseaker"
                      loading="eager"
                      quality={100}
                    />
                    <span>Get personalized career guidance</span>
                  </div>

                  <div className={styles.listryt}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/popular_man.webp"
                      width={25}
                      height={25}
                      alt="jobseaker"
                      loading="eager"
                      quality={100}
                    />
                    <span>30 min call with industry expert</span>
                  </div>
                  <div className={styles.listryt}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/growth_and_flag.webp"
                      width={25}
                      height={25}
                      alt="jobseaker"
                      loading="eager"
                      quality={100}
                    />
                    <span>Discover your upskilling path</span>
                  </div>
                </div>
              </div>
              <div className={styles.listDown}>
                <div className={styles.bookFreebtn}>
                  <div>
                    <button onClick={popupShow}>Apply for Counselling</button>
                    <p>
                      No strings attached—explore your career options with
                      expert advice!
                    </p>
                  </div>
                  <div className={styles.conImg}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/coun_round.webp"
                      width={100}
                      height={30}
                      alt="loading"
                      quality={100}
                      className={styles.desktopImg}
                      loading="eager"
                    />
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_mobile_con.webp"
                      width={150}
                      height={45}
                      alt="loading"
                      quality={100}
                      className={styles.mblImag}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btnmblDiv}>
              <button className={styles.btnMbl} onClick={popupShow}>
                Download Syllabus <MdOutlineFileDownloadSvg />
              </button>
            </div>
            <div className={styles.typelogo}>
              <Image
                src={typeLogo}
                width={isMobile ? 400 : 760}
                height={36}
                alt="type-logo"
                priority
                quality={50}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default HeroSection;
