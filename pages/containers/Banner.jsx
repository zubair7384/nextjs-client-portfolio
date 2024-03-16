import React from "react";
import Image from "next/image";
// import myImage from "../public/my-image.jpg";
import styles from "./scss/banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bioWrapper}>
        <h2 className={styles.bio}>
          As a digital marketing manager, <br />I help businesses and
          individuals to build and execute &nbsp;
          <span className={styles.success}>successful</span> marketing
          strategies.
        </h2>
      </div>
      <div className={styles.descriptionWrapper}>
        {/* <Image src={myImage} alt="Waheed Iqbal" width={500} height={300} /> */}
        <p className={styles.description}>
          With extensive experience in the field of digital marketing, I
          understand the importance of staying up-to-date with the latest trends
          and technologies to help my clients stay ahead of the competition.
        </p>
      </div>
    </div>
  );
};

export default Banner;
