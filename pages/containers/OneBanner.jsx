import React from "react";
import Image from "next/image";
import OneImage from "../../public/1.svg";
import styles from "./scss/one_banner.module.scss";

const OneBanner = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.oneBanner}>
      <div className={styles.oneWrapper}>
        <Image src={OneImage} alt="Waheed Iqbal" width={350} height={400} />
      </div>
      <div className={styles.oneDescWrapper}>
        <p className={styles.onePara}>Digital strategy development</p>
        <h2 className={styles.oneDesc}>
          I work with my clients to create a{" "}
          <span className={styles.comp}>comprehensive</span> digital marketing
          plan that includes search engine optimization, content marketing,
          social media marketing, email marketing, and more.
        </h2>
      </div>
    </div>
  );
});

export default OneBanner;
