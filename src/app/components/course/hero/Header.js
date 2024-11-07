"use client"

import { lazy, Suspense, memo, useCallback } from "react";
import Image from "next/image"; // Import Next.js Image component
import styles from "./Header.module.css";
import Button from "@/app/components/global/button/Button";

// Lazy-load heavy components to improve FID and LCP
const Form = lazy(() => import("../../global/form/Form"));

const Header = memo(({
  setPopups,
  setApplyCounselingPopup,
  spanTag,
  spanIcon,
  interstedInHide,
  dataScienceCounselling,
  upSkillingHide,
  OrangeButton,
  title,
  orgTitle,
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  CloseBotDate,
  BotWidth,
  BotHeight,
  backgroundImage, // URL for background image
  backgroundGradient, // CSS for gradient
  purpleButton,
  descrption,
}) => {
  // Memoized callback to show download popup
  const popupShow = useCallback(() => {
    setPopups(true);
  }, [setPopups]);

  // Memoized callback to show apply counseling popup
  const applyCounselingShow = useCallback(() => {
    setApplyCounselingPopup(true);
  }, [setApplyCounselingPopup]);

  return (
    <section className={styles.mainBg}>
      <div className={styles.container}>
        <div className="containerWidth">
          <div className={styles.innerDiv}>
            <div className={styles.firstSection}>
              <div className={styles.starDiv}>
                <Image
                  src={spanIcon}
                  alt="Curriculum Inclusive of Gen-AI"
                  width={59}
                  height={72}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                />
                <h5>{spanTag}</h5>
              </div>
              <h1>
                {title}
                <span className={styles.span}> {orgTitle}</span>
              </h1>
              <div className={styles.starDivSection}>
                <div className={styles.starDiv}>
                  <p>{descrption}</p>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <div onClick={popupShow} className={styles.btn}>
                  <Button text="Download Syllabus" grayButton />
                </div>
                <div onClick={applyCounselingShow}>
                  <Button
                    text="Apply for Counseling"

                  />
                </div>
              </div>
              <div className={styles.imgBot}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                  alt="Video Thumbnail"
                  width={684}
                  height={450}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                />
              </div>

              <div className={styles.btnDivM}>
                <Button text="Download Syllabus" grayButton onClick={popupShow} />
                <Button
                  text="Apply for Counseling"
                  purpleButton={purpleButton}
                  OrangeButton={OrangeButton}
                  onClick={applyCounselingShow}
                />
              </div>
            </div>

            <Suspense fallback={<div>Loading Form...</div>}>
              <div className={styles.formdiv}>
                <h3>
                  Check Your <span className={styles.span}>Eligibility</span>
                </h3>
                <Form
                  dataScienceCounselling={dataScienceCounselling}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="containerWidth">
        <div className={styles.botDiv}>
          <div className={styles.innerBotDiv}>
            <Image
              src={applicationIcon}
              alt="Application Closes"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
            />
            <div className={styles.content}>
              <p>{CloseDes}</p>
              <h3>{CloseBotDate}</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src={ProgramIcon}
              alt="Program Duration"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
            />
            <div className={styles.content}>
              <p>{DurationBot}</p>
              <h3>{DurationBotDate}</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src={trainingIcon}
              alt="Training Format"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
            />
            <div className={styles.content}>
              <p>{TrainingBot}</p>
              <h3>{CloseBotDate}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Header;
