import React from 'react';
import styles from './Popup.module.css'; // Adjust the path if necessary
import { usePopup } from '../../../context/PopupContext'; // Adjust the path if necessary

const PopupContent = ({ dataScience, radio, dataScienceCounselling, dataScienceGeneric, heading }) => {
  const { popups, setPopups } = usePopup(); // Access popup state from context

  if (!popups) return null; // Return null if the popup is not active

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button onClick={() => setPopups(false)}>Close</button>
        {/* Render your form or any content you want inside the popup */}
        <h2>{heading}</h2>
        {/* Add your form or content here */}
      </div>
    </div>
  );
};

export default PopupContent;
