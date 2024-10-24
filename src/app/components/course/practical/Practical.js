import React, { memo, useMemo } from "react";
import styles from "./Practical.module.css";
import Image from "next/image";
import { practicalData } from "./PracticalData";

const Practical = () => {
  const { title, description, points, boxes, svgRight } = practicalData;

  const memoizedPoints = useMemo(() => points, [points]);
  const memoizedBoxes = useMemo(() => boxes, [boxes]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{title}</h2>
        <p className={styles.pTag}>{description}</p>

        <div className={styles.spanDiv}>
          {memoizedPoints.map((point, index) => (
            <div key={index} className={styles.pointItem}>
              <span className={styles.svgIcon}>{svgRight}</span>
              <span className={styles.pointText}>{point.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.boxMain}>
          {memoizedBoxes.map((box, index) => (
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
