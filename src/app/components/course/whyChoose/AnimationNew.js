"use client"


import React, { useEffect, useRef } from "react";
import styles from "./AnimationNew.module.css";
import Image from "next/image";
import whyChooseData from "./AnimationNewData"; // Import the data

function AnimationNew() {
  const divRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.7, // Trigger when 70% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.highlight); // Add highlight class when in view
        } else {
          entry.target.classList.remove(styles.highlight); // Remove highlight class when out of view
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div); // Observe each div
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  // Function to return downBox class names based on index
  const getDownBoxClassName = (index) => {
    switch (index) {
      case 0:
        return styles.downBoxDesign1; // Class for the first section
      case 1:
        return styles.downBoxDesign2; // Class for the second section
      case 2:
        return styles.downBoxDesign3; // Class for the third section
      default:
        return styles.downBoxDefault; // Default class for other sections
    }
  };

  const getInsideBoxClassName = (sectionIndex, insideIndex) => {
    if (sectionIndex === 0) {
      return styles.insideBoxDesign1; // Class for insideBox in the first section
    } else if (sectionIndex === 1) {
      return styles.insideBoxDesign2; // Class for insideBox in the second section
    }
    return styles.insideBoxDefault; // Default class for other inside boxes
  };

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <h2>
            Why choose <span>Learnbay?</span>
          </h2>
        </div>
        <div className={styles.columnDiv}>
          {whyChooseData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (divRefs.current[index] = el)} // Assigning the ref to each div
              className={`${styles.divContainer} ${styles.divContainerANI}`}
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
                {index <= whyChooseData.length - 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="300"
                    viewBox="0 0 24 455"
                    fill="none"
                  >
                    <path
                      d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z"
                      fill="url(#paint0_linear_2844_6338)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2844_6338"
                        x1="12.5"
                        y1="2.01352"
                        x2="5.43854"
                        y2="452.895"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6E7D87" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>

              <div className={styles.Contents}>
                <h5>{item.title}</h5>
                <p className={styles.pTag}>{item.description}</p>

                {/* Conditionally rendering for the third section */}
                {index === 2 ? (
                  <div className={styles.customSection}>
                    {/* First, the image */}
                   
                    {/* Then the text */}
                    <div className={styles.leftText}>
                      <p>{item.subItems[0].text}</p>
                    </div>
                    <div className={styles.imageSection}>
                      <Image
                        src={item.subItems[0].ibmLogo}
                        alt="IBM Logo"
                        width={item.subItems[0].width}
                        height={item.subItems[0].height}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${styles.downBox} ${getDownBoxClassName(index)}`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        className={`${styles.insideBox} ${getInsideBoxClassName(
                          index,
                          subIndex
                        )}`}
                        key={subIndex}
                      >
                        <Image
                          src={subItem.icon}
                          alt="icon"
                          width={subItem.width}
                          height={subItem.height}
                          loading="lazy"
                        />
                        <p>{subItem.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.note && (
                  <span className={styles.noteP}>
                    <span className={styles.orgText}>*Important Note:</span>{" "}
                    {item.note}
                  </span>
                )}
              </div>

              <div className={styles.downArrow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimationNew;