import React from "react";
import styles from "./upskill.module.css";
import Image from "next/image";

const UpskillingSection = ({ upskillingData }) => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.upskillHeading}>
        Journey towards<span className={styles.spanHead}>&nbsp;Upskilling</span>
      </h2>
      <div className={styles.UpperBoxContainer}>
        {upskillingData.map((term, index) => (
          <div className={styles.boxContainer} key={index}>
            <div className={styles.upperBox}>
              <h5>{term.term}</h5>
              <p>{term.duration}</p>
            </div>

            {/* Conditionally render the SVG line */}
            {index !== 2 && index !== 5 && (
              <div className={styles.svgLine}>
                <svg
                  height="16"
                  width="180"
                  fill="none"
                  viewBox="0 0 259 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    height="16"
                    width="259"
                    fill="#FE7A36"
                    fillOpacity="0.25"
                    rx="8"
                  />
                  <path
                    d="M14.582 8L242.581 8.83392"
                    stroke="white"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            )}

            <h4 className={styles.boxTitle}>{term.title}</h4>
            <p className={styles.boxText}>
              <span className={styles.textHead}>Use cases in:</span>{" "}
              {term.useCases}
            </p>
            <div className={styles.toolBox}>
              <p>tool:</p>
              <Image
                src={term.toolImage}
                alt="icon"
                width={term.toolImageWidth}
                height={term.toolImageHeight}
                className={styles.toolIcon}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* First SVG */}
      <div className={styles.svgLinetwo}>
        <svg
          height="400"
          width="191"
          fill="none"
          viewBox="0 0 191 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            height="467"
            id="mask0_3375_297"
            style={{ maskType: "alpha" }}
            width="153"
            x="38"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <rect height="467" width="153" fill="#D9D9D9" x="38" />
          </mask>
          <g mask="url(#mask0_3375_297)">
            <rect
              height="418"
              width="229"
              rx="44"
              stroke="#583726"
              strokeWidth="16"
              x="-59"
              y="20"
            />
          </g>
          <rect height="16" width="103" fill="#583726" rx="8" y="11.5962" />
          <rect height="16" width="90" fill="#583726" rx="8" y="430" />
          <path
            d="M9.67188 438L79.6708 438.386"
            stroke="white"
            strokeDasharray="8 8"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="3"
          />
          <path
            d="M14.998 19.3723L113.891 19.3723C158.998 19.3723 170.181 37.0002 170.181 87.6844L169.791 359.855C169.791 414.5 158.998 438.296 116.559 438.296L90.4981 438.296"
            stroke="white"
            strokeDasharray="8 8"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Second SVG */}
      <div className={styles.svgLinethree}>
        <svg
          height="520"
          width="460"
          fill="none"
          viewBox="0 0 514 544"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            height="165"
            id="mask0_3375_607"
            style={{ maskType: "alpha" }}
            width="133"
            x="17"
            y="379"
            maskUnits="userSpaceOnUse"
          >
            <rect
              height="164.188"
              width="131.809"
              fill="#D9D9D9"
              x="17.6836"
              y="379"
            />
          </mask>
          <mask
            height="153"
            id="mask1_3375_607"
            style={{ maskType: "alpha" }}
            width="512"
            x="2"
            y="379"
            maskUnits="userSpaceOnUse"
          >
            <rect
              height="152.41"
              width="511"
              fill="#D9D9D9"
              x="2.39844"
              y="379.188"
            />
          </mask>
          <mask
            height="379"
            id="mask2_3375_607"
            style={{ maskType: "alpha" }}
            width="92"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <rect height="379" width="92" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_3375_607)">
            <rect
              height="508.436"
              width="270.542"
              rx="82"
              stroke="#CCE3F2"
              strokeWidth="16"
              transform="matrix(-1 0 0 1 301.594 3.29932)"
              x="-8"
              y="8"
            />
          </g>
          <g mask="url(#mask1_3375_607)">
            <path
              d="M189.336 72.1485C189.336 72.1485 82.0769 72.4334 62.2874 72.4859C43.2328 72.5365 39.5666 86.726 39.2694 119.068C39.261 119.989 40.6019 353.202 38.2179 429.348C35.834 505.494 89.7955 520.505 143.283 520.505C196.771 520.505 498.447 518.439 500.426 518.433"
              stroke="#0072BC"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              strokeWidth="3"
            />
          </g>
          <g mask="url(#mask2_3375_607)">
            <rect
              height="440"
              width="131"
              rx="41"
              stroke="#583726"
              strokeWidth="16"
              transform="matrix(-1 0 0 1 162 11)"
              x="-8"
              y="8"
            />
            <path
              d="M154.001 16.7739C154.001 16.7739 126.956 19 102.001 19C77.0461 19 38.836 20.246 40.2714 60.0112C40.2623 60.8338 38.2857 341.413 38.2159 377.299C38.1461 413.186 60.1594 417.09 75.1787 417.057C77.3768 417.108 194.906 415.695 197.051 415.69"
              stroke="white"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              strokeWidth="3"
            />
          </g>
          <rect
            height="15.453"
            width="370.594"
            fill="#CCE3F2"
            rx="10.7265"
            transform="matrix(-1 0 0 1 513.398 512.282)"
          />
          <rect height="16" width="26" fill="#583726" rx="8" x="74" y="11" />
        </svg>
      </div>
    </section>
  );
};

export default UpskillingSection;
