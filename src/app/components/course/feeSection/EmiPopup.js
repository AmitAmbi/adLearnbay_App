// Emipopup.js

import React from 'react';
import Styles from './EMIpopup.module.css';

function Emipopup({
  closeEmiPopup,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  duration2,
  totalAmount2,
  monthlyPayment2,
}) {
  return (
    <div>
      <div className={Styles.Emipopup}>
        <div className={Styles.CloseButton} onClick={closeEmiPopup}>
          {/* You can include a close button here if needed */}
        </div>

        <div className={Styles.Main}>
          <div className={Styles.containers}>
            <h2>EMI Options</h2>

            <div className={Styles.firstrow}>
              <p className={Styles.para}>Duration</p>
              <p className={Styles.para}>Total Amount</p>
              <p className={Styles.para}>Monthly Payments</p>
            </div>

            <div className={Styles.secrow}>
              <p className={Styles.greencol}>{emiType}</p>

              <span className={Styles.month}>{duration2}</span>
              <span className={Styles.Amount}>{totalAmount1} <p className={Styles.gst}>+18% GST</p></span>
              <span className={Styles.Amount}>{monthlyPayment2}</span>

              <p className={Styles.greenDown}>Standard Interest Rates Applicable</p>

              <span className={Styles.month}>{duration1}</span>
              <span className={Styles.Amount}>{totalAmount2} <p className={Styles.gst}>+18% GST</p></span>
              <span className={Styles.Amount}>{monthlyPayment1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emipopup;
