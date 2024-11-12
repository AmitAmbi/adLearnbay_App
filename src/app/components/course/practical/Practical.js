import React, { memo } from "react";
import styles from "./Practical.module.css";
import Image from "next/image";
import practicalData from "../../../../Data/componentsdata/PracticalData.json"; // Importing the JSON file

const Practical = () => {
  const { title, description, points, boxes, svgRight } = practicalData;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{title}</h2>
        <p className={styles.pTag}>{description}</p>

        <div className={styles.spanDiv}>
          {points.map((point, index) => (
            <div key={index} className={styles.pointItem}>
              <span className={styles.svgIcon}>
                {/* Simplified SVG for Testing */}
                <svg
                  width={svgRight.width}
                  height={svgRight.height}
                  viewBox={svgRight.viewBox}
                  xmlns={svgRight.xmlns}
                >
                  {/* Directly render the arrow */}
                  <g>
                    <path
                      d="M10,50 C40,10, 60,90, 90,50 C120,10, 140,90, 170,50"
                      fill="none"
                      stroke="#04C988" // Color of the signature (green here)
                      strokeWidth="8" // Width of the signature line
                    />
                  </g>
                </svg>
              </span>
              <span className={styles.pointText}>{point.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.boxMain}>
          {boxes.map((box, index) => (
            <div className={styles.box} key={index}>
              <div className={styles.imgDiv}>
                <Image
                  src={box.imgSrc}
                  alt={box.imgAlt}
                  loading="lazy"
                  width={box.width}
                  height={box.height}
                  quality={75}
                  placeholder="blur"
                  blurDataURL={box.imgSrc}
                />
              </div>
              <h5>{box.title}</h5>
              <p>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Practical);
