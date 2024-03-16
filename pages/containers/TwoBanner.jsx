import React from "react";
import Image from "next/image";
import TwoImage from "../../public/2.svg";
import styles from "./scss/two_banner.module.scss";

const TwoBanner = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.twoBanner}>
      <div className={styles.twoDescWrapper}>
        <p className={styles.twoPara}>Search engine optimization (SEO)</p>
        <h2 className={styles.twoDesc}>
          I help businesses to improve their search engine rankings through
          keyword research, content&nbsp;
          <span className={styles.comp}>optimization,</span> and link building.
        </h2>
      </div>
      <div className={styles.twoWrapper}>
        <Image src={TwoImage} alt="Waheed Iqbal" width={300} height={400} />
      </div>
    </div>
  );
});

export default TwoBanner;
