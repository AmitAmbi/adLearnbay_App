import React, { memo } from "react";
// import React, { useEffect } from "react";
import styles from "./Popup.module.css";
import { IoCloseSvg } from "@/Data/svgData/Io5";
import Image from "next/image";

const Popup = memo((props) => {
  if (props.price) color = "white";
  // useEffect(() => {
  //   if (props.trigger) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        <div className="image">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/popup-left.webp"
            height={430}
            width={330}
          />
        </div>
        <IoCloseSvg
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
        {/* {props.downloadBrochure ? (
          <IoCloseSvg
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoCloseSvg
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )} */}

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
});

export default Popup;
