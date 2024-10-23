import React, { useEffect } from "react";
import styles from "./Popup.module.css";
import { IoCloseSvg } from "@/Data/svgData/Io5";


const Popup = (props) => {
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
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
        )}

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
