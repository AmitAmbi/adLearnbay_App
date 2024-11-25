"use client";

import { useState } from "react";
import styles from "./projectSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

import PopupContent from "@/app/components/global/popup/PopupContent";

import data from "@/Data/componentsdata/ProjectSectionData.json";

const ProjectSection = ({
  interstedInHide,
  brochureLink,
  brochurePdf,
  ADS,
  formotp,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  return (
    <section className={styles.projectSection}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        ADS={ADS}
        formotp={formotp}
      />
      <h2 className={styles.headline}>
        Industry <span>Projects</span>
      </h2>
      <div className={styles.subheadingContainer}>
        <div className={styles.orangeBox}>95% industry relevance</div>
        <div className={styles.blueBox}>22+ tools and modules</div>
        <div className={styles.greenBox}>100% real-world experience</div>
      </div>
      <div className={styles.projectsConatiner}>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1440: { slidesPerView: 3, spaceBetween: 30 },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className={styles.mySwiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles.sliderWrapper}>
              <div className={styles.projectCard}>
                <div className={styles.upperPart}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    className={styles.projectIcon}
                  />
                  <div className={styles.upperRight}>
                    <p className={styles.hrsBox}>{item.number}</p>
                  </div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardText}>{item.text}</div>
                <div className={styles.lowerBox}>
                  <Image
                    src={item.tool1}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    className={styles.projectIcon}
                  />
                </div>
                <div className={styles.cardText}>
                  <span style={{ color: "#0072BC" }}>
                    <b>Outcome:</b>
                  </span>{" "}
                  {item.cta}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.MainDown}>
        <div className={styles.boxDiv}>
          <div className={styles.downDiv}>
            <h6>Gain Practical Experience with Real-World Projects</h6>
            <div className={styles.ryticons}>
              <div className={styles.imgesIconDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  loading="lazy"
                />
                <span>Practical Skills</span>
              </div>

              <div className={styles.imgesIconDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project_two.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  loading="lazy"
                />
                <span>Project Life Cycle</span>
              </div>

              <div className={styles.imgesIconDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_project_three.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  loading="lazy"
                />
                <span>Lead a Team</span>
              </div>

              <div className={styles.imgesIconDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Project_four.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  loading="lazy"
                />
                <span>Industry Knowledge</span>
              </div>
            </div>
          </div>

          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/lineCross+(1).webp"
            width={120}
            height={150}
            loading="lazy"
            alt="data science"
            className={styles.imgside}
          />
        </div>

        <p className={styles.pBot}>
          <span className={styles.spanOrange}>Important Note:</span> The final
          number of quizzes, assignments, and discussions will be confirmed
          closer to the program start. To know more{" "}
          <span className={styles.blueSpan} onClick={popupShow}>
            check eligibility
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
