"use client"; // Needed for React hooks in Next.js
import Image from "next/image";
import styles from "./ProgramSection.module.css"; // Adjust the path if necessary
import Popup from "../../global/popup/Popup"; // Adjust the path if necessary
import Form from "../../global/form/Form"; // Adjust the path if necessary
import { useState, memo, useEffect } from "react";

const ProgramSection = memo(({ designOverrides, popupProps, programSectionData }) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => setPopups(true);

  // Log the data to check its structure
  useEffect(() => {
    console.log("Program Section Data:", programSectionData);
  }, [programSectionData]);

  // Check if programSectionData and ProggramSection exist
  if (!programSectionData || !programSectionData.ProggramSection) {
    return <div>Error: Program section data is missing or incorrect</div>;
  }

  const { ProggramSection } = programSectionData;

  return (
    <section
      className={`${styles.container} ${designOverrides?.container || ""}`}
      style={designOverrides?.containerStyle}
    >
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        {...popupProps}
      >
        <div className="leftPopup">
          <div className="whiteP" style={{ width: "340px", height: "400px" }}></div>
        </div>
        <div className="RightPopup">
          <h5>{ProggramSection[0]?.popupTitle || "Apply For Counselling"}</h5>
          <Form
            popup={true}
            setTrigger={setPopups}
          />
        </div>
      </Popup>

      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Who is this program for?
            <hr className={styles.hrline} />
          </h2>
          <p className={styles.pHead}>
            Work on projects based on real-world scenarios
          </p>
          <div className={styles.twoSection}>
            {ProggramSection.map((section, index) => {
              const { content } = section;

              return (
                <div key={index} className={styles.firstSection}>
                  <h3 className={styles.H3}>
                    <span className={styles.blackSpan}>{content?.BoldText} </span>
                    {content?.nonBold}
                    <span className={styles.colors}> {content?.yearExp}</span>
                  </h3>
                  <p className={styles.pTop}>
                    {content?.description
                      ?.split("not mandatory")
                      ?.map((segment, index, array) => (
                        <span key={index}>
                          {segment}
                          {index < array.length - 1 && (
                            <span className={styles.green}>not mandatory</span>
                          )}
                        </span>
                      ))}
                  </p>

                  <div className={styles.innerBoxDiv}>
                    {content?.points?.map((point, index) => (
                      <div key={index} className={styles.innerBox}>
                        <div>
                          <Image
                            src={point.icon}
                            alt={point.title}
                            quality={100}
                            layout="responsive"
                            width={40}
                            height={40}
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
                src={ProggramSection[0]?.rightImg}
                alt="Learnbay"
                quality={100}
                layout="responsive"
                width={611} // Maintain aspect ratio
                height={506}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProgramSection;
