"use client";

import styles from "./ReviewSlider.module.css";
import Image from "next/image";


import Reels from "./Reels";
import VideoYt from "../videoYt/VideoYt";

const ReviewSlider = () => {
  return (
    <div className={styles.keyContainer}>
      <Reels />
      <div className={styles.mainDiv}>
        {/* Bottom Review Section */}
        <div className={styles.reviewBotSection}>
          <div className={styles.firstBotReview}>
            <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
            <p>Discover what our learners say about us</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="800"
              height="408"
              className={styles.socailR}

            />
          </div>
          <div className={styles.secondBotReview}>
            <VideoYt className={styles.YT} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
