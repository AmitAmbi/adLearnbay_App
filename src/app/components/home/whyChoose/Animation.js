"use client"

import React, { useEffect, useRef } from "react";
import styles from "./Animation.module.css";
import Image from "next/image";
import whyChooseData from "./Whychoosedata"; // Import the data

function Animation() {
  const divRefs = useRef([]); // Reference for all divs

  useEffect(() => {
    const options = {
      threshold: 0.7, // Trigger when 70% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Introduce a delay based on the index to stagger the effect
          setTimeout(() => {
            entry.target.classList.add(styles.highlight); // Add highlight class when in view
          }, index * 200); // 200ms delay per div
        } else {
          // Immediately remove the highlight class when out of view
          entry.target.classList.remove(styles.highlight);
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div); // Observe each div
    });

    // Cleanup observer on component unmount
    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <p>It’s not just any other ordinary platform, </p>
          <h2>
            It's <span>Learnbay</span>
          </h2>
        </div>
        <div className={styles.columnDiv}>
          {whyChooseData.map((item, index) => (
            <div
              className={styles.divContainer}
              key={index}
              ref={(el) => (divRefs.current[index] = el)} // Assign the ref
            >
              <div className={styles.svglogo}>
                <Image
                  src={item.image}
                  alt="Learnbay"
                  quality={100}
                  loading="lazy"
                  width={70}
                  height={70}
                />
                {item.svg && item.svg}
              </div>
              <div className={styles.downArrow}></div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Animation;
