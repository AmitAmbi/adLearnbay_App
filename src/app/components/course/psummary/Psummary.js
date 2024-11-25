"use client"; // Must be at the top

import React, { useState, useRef, memo, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./Psummary.module.css"; 

const PSummaryAD = ({ summaryData = [], customClassName = "" }) => {
  const [activeDot, setActiveDot] = useState(0);
  const contentContainerRef = useRef(null);
  const sectionRefs = useRef([]); 

  useEffect(() => {
    const fetchData = async () => {
      if (summaryData.length === 0) {
        try {
          const response = await fetch("/summaryData.json"); 
          const data = await response.json();

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    const contentContainer = contentContainerRef.current;


    const handleResize = () => {
      if (window.innerWidth <= 768) {
        contentContainer.style.overflowX = "auto";
      } else {
        contentContainer.style.overflowX = "hidden"; 
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.Box}`);
      let updatedDot = activeDot;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.left >= 0 && rect.left < window.innerWidth / 2 && activeDot !== index) {
          updatedDot = index;
        }
      });

      if (updatedDot !== activeDot) {
        setActiveDot(updatedDot);
      }
    };

    window.addEventListener("resize", handleResize);
    contentContainer.addEventListener("scroll", handleScroll);


    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      contentContainer.removeEventListener("scroll", handleScroll);
    };
  }, [summaryData, activeDot]);


  const scrollToSection = useCallback((index) => {
    const section = document.querySelectorAll(`.${styles.Box}`)[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest", 
        inline: "start",
      });
      setActiveDot(index);
    }
  }, []);

  return (
    <div className={`${styles.Container} ${customClassName}`}>
      <h2>
        Program{" "}
        <span className={styles.spans}>
          Summary <hr className={styles.hrline} />
        </span>
      </h2>
      <div className={styles.contentConteiner} ref={contentContainerRef}>
        {summaryData.map((item, index) => (
          <div
            key={item.id}
            className={styles.Box}
            ref={(el) => (sectionRefs.current[index] = el)} 
          >
            <div>
              <Image
                src={item.imageSrc}
                width={60}
                height={60}
                loading="lazy"
                alt={item.imageAlt}
              />
              <h4>{item.title}</h4>
            </div>
            <div>
              <p>{item.description}</p>
              {item.extraImageSrc && (
                <Image
                  src={item.extraImageSrc}
                  width={200}
                  height={30}
                  loading="lazy"
                  alt={item.extraImageAlt}
                  className={styles.ibmLogo}
                />
              )}
            </div>
          </div>
        ))}
      </div>


      <div className={styles.customScrollbar}>
        <div className={styles.dotContainer}>
          {summaryData.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(index)}
              className={`${styles.dot} ${
                activeDot === index ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PSummaryAD);
