"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ContactUs.module.css";
import dynamic from "next/dynamic";

function ContactUs({
  dataScience,
  dataScienceCounselling,
  radio,
  upSkillingHide,
  interstedInHide,
  dataScienceGeneric,
}) {
  // State to manage screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width to determine if it is mobile or desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add listener on resize

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  return (
    <section className={styles.section}>
      <div className="containerWidth">
        {/* Conditional rendering of background images */}
        {isMobile ? (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/mbl_shadows.webp"
            fill
            styles={{ objectFit: "cover" }}
            alt="Mobile Background"
            priority={false}
          />
        ) : (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/shades.webp"
            fill
            styles={{ objectFit: "cover" }}
            alt="Desktop Background"
            priority={false}
          />
        )}

        <div className={styles.ContactUs}>
          <div className={styles.LeftSide}>
            <h2 className={styles.h1}>
              Get Ahead with Industry-Leading Courses <br />
            </h2>

            <div className={styles.conpara}>
              <p>
                <span className={styles.paraspan}>“</span>
                <br />I had a great learning experience at Learnbay. The faculties
                here are top notch. Right from enrollment to getting a good job,
                they keep putting enormous efforts for each and every candidate.
                Thanks to all the trainers, backend team.
              </p>
            </div>

            <div className={styles.leftpaerson}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/preksha-home.png"
                width={50}
                height={50}
                loading="lazy"
                alt="review"
              />

              <p>
                Shravanthi A.
                <br />
                <span>Data Scientist @TCS</span>
              </p>
            </div>

            <div className={styles.slider}>
              <div className={styles.swiperslider}>
                <div className={styles.cardBox}>
                  {" "}
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/KPMG_one.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/AXA_two.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Gen_threee.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Data_four.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/JPM_fifth.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>

                {/* duplicate content */}
                <div className={styles.cardBox}>
                  {" "}
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/KPMG_one.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/AXA_two.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Gen_threee.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Data_four.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
                <div className={styles.cardBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/JPM_fifth.webp"
                    width={100}
                    height={140}
                    loading="lazy"
                    alt="review"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.RightSide}>
              <p className={styles.NormalPForm}>
                Check Your <span className={styles.span}>Eligibility </span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
