// PSummaryAD.jsx
"use client"; // Must be at the top

import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import Image from "next/image";
import styles from "./Psummary.module.css"; // Ensure the CSS is correct

const PSummaryAD = ({ summaryData = [], customClassName = "" }) => { // Default to an empty array
  const [activeDot, setActiveDot] = useState(0); // Track the active dot
  const contentContainerRef = useRef(null); // Ref for content container

  // Ensure summaryData is fetched if not passed in
  useEffect(() => {
    if (summaryData.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('/summaryData.json'); // Adjust path if necessary
          const data = await response.json();
          // Handle fetched data here if you choose to fetch again
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [summaryData]);

  // Scroll handling and other logic remains the same...

  return (
    <div className={`${styles.Container} ${customClassName}`}>
      <h2>
        Program <span className={styles.spans}>Summary <hr className={styles.hrline}/></span>
      </h2>
      <div className={styles.contentConteiner} ref={contentContainerRef}>
        {summaryData.map((item) => (
          <div key={item.id} className={styles.Box}>
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

      {/* Custom Scrollbar with Dots */}
      <div className={styles.customScrollbar}>
        <div className={styles.dotContainer}>
          {summaryData.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(index)}
              className={`${styles.dot} ${activeDot === index ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PSummaryAD);
