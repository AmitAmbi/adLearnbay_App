"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Syllabus.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles (if used)
import "swiper/css/pagination"; // Pagination styles (if used)
import "swiper/css/effect-coverflow"; // Coverflow effect styles (if used)

const SyllabusSection = ({
  sections = [],
  brochureLink,
  brochurePdf,
  interstedInHide,
  radio,
}) => {
  const [openSliderIndex, setOpenSliderIndex] = useState(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([]);
  const swiperRef = useRef(null);
  const gridContainerRef = useRef(null);
  const [popups, setPopups] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSlider = (index) => {
    setInitialSlide(index);
    setOpenSliderIndex(openSliderIndex === index ? null : index);

    // Scroll to the first card when opening the popup
    if (gridContainerRef.current) {
      const firstCard = gridContainerRef.current.querySelector(".card");
      if (firstCard) {
        const cardLeftPosition = firstCard.offsetLeft;
        gridContainerRef.current.scrollTo({
          left: cardLeftPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const updateActiveSlides = () => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;
    const slides = Array.from(swiperInstance.slides);
    const swiperRect = swiperInstance.el.getBoundingClientRect();
    const swiperCenter = swiperRect.left + swiperRect.width / 2;
    const activeRange = 0.3 * swiperRect.width;

    const newActiveSlides = slides
      .filter((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = (slideRect.left + slideRect.right) / 2;
        return Math.abs(swiperCenter - slideCenter) < activeRange;
      })
      .map((slide) => slide.getAttribute("data-swiper-slide-index"));

    setActiveSlides(newActiveSlides);
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateActiveSlides);
      swiperInstance.on("transitionEnd", updateActiveSlides);
      updateActiveSlides();
    }

    return () => {
      swiperInstance?.off("slideChange", updateActiveSlides);
      swiperInstance?.off("transitionEnd", updateActiveSlides);
    };
  }, [openSliderIndex]);

  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  const popupShow = () => {
    setPopups(true);
  };

  const closePopup = () => {
    setOpenSliderIndex(null);
  };

  return (
    <div className={styles.mainConteiner}>
      {/* <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
      /> */}
      <h2 className={styles.headline}>
        Explore Our <span>Syllabus</span>
      </h2>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={styles.gridConteiner}
          ref={gridContainerRef}
        >
          <div className={styles.gridleft}>
            <div className={styles.leftinside}>
              <Image
                src={section.trackIcon}
                width={section.width}
                height={section.height}
                alt="trackIcon"
              />
              <h3>{section.title}</h3>
            </div>
            {index !== sections.length - 1 && (
              <div className={styles.verticalLine}></div>
            )}
          </div>
          <div className={styles.gridryt}>
            <div className={styles.rytmain}>
              <div className={styles.ryttop}>
                <p>{section.description}</p>
                <div className={styles.date}>
                  <p>{section.duration}</p>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentlist}>
                  <p className={styles.pline}>
                    <span className={styles.org}>
                      {section.contentModule}:{" "}
                    </span>
                    {section.contentDescription}
                  </p>
                  <ul className={styles.lists}>
                    {section.contentDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div
                    className={styles.popupbtn}
                    onClick={() => toggleSlider(index)}
                  >
                    Read more
                  </div>
                </div>
                <div className={styles.tools}>
                  <p>Topics</p>
                  <Image
                    src={section.toolsImg}
                    width={section.toolwidth}
                    height={section.toolheight}
                    alt="tools"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {openSliderIndex === index && (
            <div className={styles.popup}>
              <button className={styles.closePopup} onClick={closePopup}>
                Close
              </button>
              {Array.isArray(section.popuplist) &&
              section.popuplist.length > 0 ? (
                !isMobile ? (
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides={true}
                    className={styles.swiper}
                    ref={swiperRef}
                    grabCursor={true}
                    touchRatio={2}
                    freeMode={false}
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 40,
                      depth: 100,
                      modifier: 2,
                    }}
                    initialSlide={initialSlide}
                    onSlideChange={updateActiveSlides}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      480: { slidesPerView: 1.5, spaceBetween: 15 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 30 },
                      1440: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                  >
                    {section.popuplist.map((item, idx) => (
                      <SwiperSlide
                        key={item.id}
                        data-swiper-slide-index={idx}
                        className={`${styles.swiperSlide} ${
                          activeSlides.includes(idx.toString())
                            ? styles.active
                            : ""
                        }`}
                      >
                        <div className={styles.card}>
                          <div className={styles.cardContent}>
                            <div className={styles.cardHead}>
                              <div className={styles.termGreen}>
                                {item.term}
                              </div>
                              <div className={styles.date}>
                                <span>{item.duration}</span>
                              </div>
                            </div>
                            <h5 className={styles.titleH}>{item.title}</h5>
                            <div className={styles.slidercontent}>
                              {item.modules.map((module) => (
                                <div
                                  className={styles.module}
                                  key={module.moduleTitle}
                                >
                                  <div className={styles.popupleft}>
                                    <span className={styles.rotateText}>
                                      {module.moduleTitle}
                                    </span>
                                  </div>
                                  <div className={styles.rytdiv}>
                                    <p>{module.moduleContent}</p>
                                    <ul className={styles.listItem}>
                                      {module.moduleList.map(
                                        (detail, detailIdx) => (
                                          <li key={detailIdx}>{detail}</li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className={styles.cardContainer}>
                    {section.popuplist.map((item, idx) => (
                      <div key={idx} className={styles.card}>
                        <div className={styles.cardContent}>
                          <div className={styles.cardHead}>
                            <div className={styles.termGreen}>{item.term}</div>
                            <div className={styles.date}>
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <h5 className={styles.titleH}>{item.title}</h5>
                          <div className={styles.slidercontent}>
                            {item.modules.map((module) => (
                              <div
                                className={styles.module}
                                key={module.moduleTitle}
                              >
                                <div className={styles.popupleft}>
                                  <span className={styles.rotateText}>
                                    {module.moduleTitle}
                                  </span>
                                </div>
                                <div className={styles.rytdiv}>
                                  <p>{module.moduleContent}</p>
                                  <ul className={styles.listItem}>
                                    {module.moduleList.map(
                                      (detail, detailIdx) => (
                                        <li key={detailIdx}>{detail}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div>No modules available.</div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className={styles.buttondiv}>
        <div className={styles.btnone} onClick={popupShow}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Thumb_Icon+(1).webp"
            width={30}
            height={30}
            loading="lazy"
            alt="Python"
          />
          Start Your Application
        </div>
        <div className={styles.btntwo} onClick={popupShow}>
          <div className={styles.pdficon}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/pdF_icon+(1).webp"
              width={30}
              height={30}
              loading="lazy"
              alt="Python"
            />
          </div>
          Download Brochure
        </div>
      </div>
    </div>
  );
};

export default SyllabusSection;
