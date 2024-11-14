import React from 'react';
import styles from "./Clog.module.css";
import Image from 'next/image';

const CLogo = () => {
    const Imgdata = [
        { id: 0, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/jpmorgan.webp", alt: "JPmorgan", width: 100, height: 25 },
        { id: 1, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/kpmGG.webp", alt: "KPMG", width: 100, height: 30 },
        { id: 2, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/microsoft.webp", alt: "Microsoft", width: 100, height: 27 },
        { id: 3, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/samsung.webp", alt: "Samsung", width: 100, height: 26 },
        { id: 4, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/boch.webp", alt: "BOSCH", width: 100, height: 30 },
        { id: 5, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/delot.webp", alt: "Deloitte", width: 100, height: 30 },
        { id: 6, image: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/PWC.webp", alt: "PWC", width: 100, height: 47 }
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

                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.textWithLines}>
                    <hr className={styles.hrLeft} />
                    <p>Get hired at 250+ companies</p>
                    <hr className={styles.hrRight} />
                </div>
            </div>
        </div>
    );
};

export default CLogo;
