import React from "react";
import styles from "../home/Home.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <svg
        // xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        // style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M14 50A36 36 0 0 0 86 50A36 37.9 0 0 1 14 50"
          fill="#f66f15"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50.95;360 50 50.95"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
}
