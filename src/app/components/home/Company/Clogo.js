import React from 'react';
import styles from "./Clog.module.css";
import Image from 'next/image';

const CLogo = () => {
    const Imgdata = [
        { id: 0, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/jpmorgan.webp", alt:"JPmorgan" },
        { id: 1, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/kpmGG.webp", alt:"KPMG" },
        { id: 2, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/microsoft.webp", alt:"Microsoft" },
        { id: 3, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/samsung.webp", alt:"Samsung" },
        { id: 4, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/boch.webp", alt:"BOSCH" },
        { id: 5, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/delot.webp", alt:"Deloitte" },
        { id: 6, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/PWC.webp", alt:"PWC" }
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    {Imgdata.map(item => (
                        <div key={item.id} className={styles.imageWrapper}>
                            <Image 
                                src={item.image} 
                                alt={`${item.alt}`} 
                                
                                width={100} 
                                height={30} 
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.textWithLines}>
                    <hr className={styles.hrLeft}/>
                    <p>Get hired at 250+ companies</p>
                    <hr className={styles.hrRight}/>
                </div>
            </div>
        </div>
    );
};

export default CLogo;
