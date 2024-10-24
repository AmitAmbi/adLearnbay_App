import React from "react";
import styles from "./jobReadySection.module.css";
import Image from "next/image";

function JobReadySection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2 className={styles.headH4}>
          <span className={styles.grey}>Achieve your career goals with our </span> 
          <span className={styles.orange}>Placement Support</span>
        </h2>
        <div className={styles.innerdiv}>
          <div className={styles.innerbox}>
            <h4>Placement Support</h4>
            <p>
            Unlock exclusive access to a wide range of job opportunities, with personalized support to enhance your interview readiness and optimize your professional profile.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Job_Bag+(1).webp"
              alt="Zest"
              width={80}
              height={70}
              loading="lazy"
              className={styles.img1}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Mock Interviews</h4>
            <p>
            Sharpen your interview skills with tailored mock sessions that simulate real-world scenarios, 
giving you the confidence and 
experience to excel in actual
job interviews.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Person_Bag+(1).webp"
              alt="Zest"
              width={80}
              height={70}
              loading="lazy"
              className={styles.img2}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Resume BuildUp</h4>
            <p>
            Craft a compelling resume with expert guidance, ensuring your profile stands out in a competitive job market and highlights your key
strengths and achievements.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/yellow_icon.webp"
              alt="Zest"
              width={80}
              height={70}
              loading="lazy"
              className={styles.img1}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Ultimate Interview calls</h4>
            <p>
            Maximise your chances of landing the perfect job with unlimited interview opportunities, backed by continuous support and feedback to refine your approach.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/lapTop_person+(1)+(1).webp"
              alt="Zest"
              width={80}
              height={70}
              loading="lazy"
              className={styles.img2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobReadySection;
