import React from "react";
import styles from "./scss/next_level.module.scss";

const NexeLevel = () => {
  return (
    <div className={styles.nextLevel}>
      <div className={styles.paraWrapper}>
        <p className={styles.para}>
          DIGITAL <br /> MARKETING MANAGER
        </p>
      </div>
      <h3 className={styles.detail}>
        who can help you take your business to the &nbsp;{" "}
        <span className={styles.next}>next level</span> , look no further
      </h3>
    </div>
  );
};

export default NexeLevel;
