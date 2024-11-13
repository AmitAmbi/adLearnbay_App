import React from "react";
import styles from "./toolsSection.module.css";
import Image from "next/image";

function ToolsSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>Programming Languages & Tools Covered</h2>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/tools_cover.webp"
          alt="Learnbay"
          quality={100}
          priority
          width="2006"
          height="389"
          className={styles.desktopImg}
        />
         <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/mbl_tools.webp" // Replace with your mobile image URL
          alt="Learnbay Mobile"
          quality={100}
          priority
          width="400" // Adjust the width as needed
          height="300" // Adjust the height as needed
          className={styles.mobileImage}
        />
      </div>
    </section>
  );
}

export default ToolsSection;
