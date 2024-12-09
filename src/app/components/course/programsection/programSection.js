"use client";
import Image from "next/image";
import styles from "./ProgramSection.module.css";
import Popup from "../../global/popup/Popup";
import Form from "../../global/form/Form";
import { useState, memo, useEffect } from "react";

const ProgramSection = memo(
  ({ designOverrides, popupProps, programSectionData }) => {
    const [popups, setPopups] = useState(false);
    const popupShow = () => setPopups(true);

    useEffect(() => {
      console.log("Program Section Data:", programSectionData);
    }, [programSectionData]);

    if (!programSectionData || !Array.isArray(programSectionData) || programSectionData.length === 0) {
      return <div>Error: Program section data is missing or empty</div>;
    }
    

    return (
      <section
        className={`${styles.container} ${designOverrides?.container || ""}`}
        style={designOverrides?.containerStyle}
      >
        {/* Popup Section */}
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>{programSectionData[0]?.popupTitle || "Apply For Counselling"}</h5>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>

        {/* Main Content */}
        <div className="containerWidth">
          <div className={styles.innerDiv}>
            <h2>
              <span className={styles.innerDivH2Span}>Who is this</span>
              <span> Program for?</span>
            </h2>
            <p className={styles.pHead}>
              Work on projects based on real-world scenarios
            </p>
            <div className={styles.twoSection}>
              {programSectionData.map((section, index) => {
                const { content, rightImg } = section;

                return (
                  <div key={index} className={styles.firstSection}>
                    <h3 className={styles.H3}>
                      <span className={styles.blackSpan}>
                        {content?.BoldText}{" "}
                      </span>
                      {content?.nonBold}
                      <span className={styles.colors}> {content?.yearExp}</span>
                    </h3>
                    <p className={styles.pTop}>
                      {content?.description
                        ?.split("not mandatory")
                        ?.map((segment, idx, array) => (
                          <span key={idx}>
                            {segment}
                            {idx < array.length - 1 && (
                              <span className={styles.green}>
                                not mandatory
                              </span>
                            )}
                          </span>
                        ))}
                    </p>

                    <div className={styles.innerBoxDiv}>
                      {content?.points?.map((point, idx) => (
                        <div key={idx} className={styles.innerBox}>
                          <div className={styles.imgWrapper}>
                            <Image
                              src={point.icon}
                              alt={point.title}
                              quality={100}
                              fill
                              loading="lazy"
                            />
                          </div>
                          <h3>{point.title}</h3>
                        </div>
                      ))}
                    </div>

                    <p className={styles.pBot}>
                      <span className={styles.orangeSpan}>Important Note:</span>
                      {content?.importantNote}
                      <span className={styles.blueSpan} onClick={popupShow}>
                        {""} check eligibility
                      </span>
                    </p>
                  </div>
                );
              })}

              <div className={styles.secondSection}>
                <Image
                  src={programSectionData[0]?.rightImg}
                  alt="Learnbay"
                  quality={100}
                  width={611}
                  height={506}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default ProgramSection;
