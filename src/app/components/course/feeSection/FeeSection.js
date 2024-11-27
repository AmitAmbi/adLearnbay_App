"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../global/button/Button"));
import styles from "./feeSection.module.css";
import Emipopup from "./EmiPopup";
import Modal from "react-modal";
import PopupContent from "../../global/popup/PopupContent";

const FeeContent = ({
  Fee,
  FeeEmi,
  hybridFee,
  hybridEmi,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  dataScience,
  iitGuwatiGen,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const openEmiPopup = () => {
    setEmiPopupIsOpen(true);
  };

  const closeEmiPopup = () => {
    setEmiPopupIsOpen(false);
  };
  const [popups, setPopups] = useState(false);
  return (
    <div className={styles.feesmain}>
      <div className="containerWidth">
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Apply For Counselling"
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
        />
        <h2>Course Fee</h2>
        <div className={styles.mainContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.firstContainer}>
              <h4 className={styles.headOrange}>Live online classes</h4>
              <p className={styles.firstP}>Benefits :</p>
              <div className={styles.iconDiv}>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                    alt="Zest"
                    width="45"
                    height="45"
                    loading="lazy"
                  />
                  <p className={styles.iconContent}>
                    Live online interactive sessions
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                    alt="Zest"
                    width="45"
                    height="45"
                    loading="lazy"
                  />
                  <p className={styles.iconContent}>
                    1:1 online Doubt Session with experts
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                    alt="Zest"
                    width="45"
                    height="45"
                    loading="lazy"
                  />
                  <p className={styles.iconContent}>Online Capstone projects</p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                    alt="Zest"
                    width="45"
                    height="45"
                    loading="lazy"
                  />
                  <p className={styles.iconContent}>Virtual  Mock interviews</p>
                </div>
              </div>
              <div className={styles.feeContentContainer}>
                <div className={styles.border}>
                  <p>Program Fee</p>
                  <h4>
                    {Fee}
                    <span> + 18% GST</span>
                  </h4>
                </div>
                <p>Pay in easy EMIs starting as low as</p>
                <h4>{FeeEmi}</h4>

                <div className={styles.emiButton} onClick={openEmiPopup}>
                  <Button text="Check EMI Options" />
                </div>
              </div>
            </div>
            <div className={styles.secondContainer}>
              <div className={styles.starRight}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/star_right.webp"
                  alt="Zest"
                  width="590"
                  height="525"
                  loading="lazy"
                />
              </div>
              <div className={styles.divTop}>
                <h4 className={styles.headBlue}>Hybrid Classes</h4>
                <span>popular</span>
              </div>
              <p className={styles.fadedText}>Benefits :</p>
              <div className={styles.iconDiv}>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    All the benefits of Live OnLine Classes
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Offline 1:1 classroom doubt sessions on weekends
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Offline Mock Interviews with 3-5 members panel
                  </p>
                </div>
                <div className={styles.innerIconDiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <p className={styles.iconContent}>
                    Offline Classroom Capstone projects in{" "}
                    <span>
                      Pune, Delhi, Bangalore, Chennai, Hydrabad and Mumbai
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.feeSectionContainer}>
                <div className={styles.feeContentContainer}>
                  <div className={styles.border}>
                    <p>Program Fee</p>
                    <h4>
                      {hybridFee}
                      <span> + 18% GST</span>
                    </h4>
                  </div>
                  <p>Pay in easy EMIs starting as low as</p>
                  <h4 style={{ color: "#0072BC" }}>{hybridEmi}</h4>

                  <div className={styles.emiButtonBlue} onClick={openEmiPopup}>
                    <Button text="Check EMI Options" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnDown}>
            <div className={styles.btnone} onClick={popupShow}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Thumb_Icon+(1).webp"
                width={30}
                height={30}
                loading="lazy"
                alt="Python"
              />
              Start Your Application
            </div>
          </div>
        </div>

        {/* Emi Popup */}
        <Modal
          isOpen={emiPopupIsOpen}
          onRequestClose={closeEmiPopup}
          className={styles.Emipopup}
          overlayClassName={styles.Overlay}
          contentLabel="EMI Popup"
        >
          <div className={styles.clostbtn} onClick={closeEmiPopup}>
            <span>close[x]</span>
          </div>
          <Emipopup
            emiType={emiType}
            duration1={duration1}
            totalAmount1={totalAmount1}
            monthlyPayment1={monthlyPayment1}
            greenDown1={greenDown1}
            duration2={duration2}
            totalAmount2={totalAmount2}
            monthlyPayment2={monthlyPayment2}
            greenDown2={greenDown2}
            iitGuwatiGen={iitGuwatiGen}
          />
        </Modal>
      </div>
    </div>
  );
};

export default FeeContent;
