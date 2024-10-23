import React from 'react';
import styles from './infinity.module.css';
import Image from 'next/image';
import { topSliderData, bottomSliderData } from './Sliderdata';  // Import the data

const Slider = () => {
  return (
    <>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInner}>
          <div className={styles.topDiv}>
            {/* Dynamically render the top slider content */}
            {topSliderData.map((item, index) => (
              <div key={index} className={styles.cards}>
                <Image 
                  src={item.src} 
                  width={30} 
                  height={30} 
                  alt={item.alt} 
                  loading='lazy' 
                />
                <p>{item.text}</p>
              </div>
            ))}
            {/* Duplicate content for seamless looping */}
            {topSliderData.map((item, index) => (
              <div key={`duplicate-${index}`} className={styles.cards}>
                <Image 
                  src={item.src} 
                  width={30} 
                  height={30} 
                  alt={item.alt} 
                  loading='lazy' 
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapperdown}>
        <div className={styles.sliderInnerDown}>
          <div className={styles.DownDiv}>
            {/* Dynamically render the bottom slider content */}
            {bottomSliderData.map((item, index) => (
              <div key={index} className={styles.cardsDown}>
                <Image 
                  src={item.src} 
                  width={30} 
                  height={30} 
                  alt={item.alt} 
                  loading='lazy' 
                />
                <p>{item.text}</p>
              </div>
            ))}
            {/* Duplicate content for seamless looping */}
            {bottomSliderData.map((item, index) => (
              <div key={`duplicate-down-${index}`} className={styles.cardsDown}>
                <Image 
                  src={item.src} 
                  width={30} 
                  height={30} 
                  alt={item.alt} 
                  loading='lazy' 
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
