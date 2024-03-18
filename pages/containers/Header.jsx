import React from "react";
import Image from "next/image";
import HeaderLogo from "../../public/headerLogo.svg";
import styles from "./scss/header.module.scss";

const Header = ({ scrollToOneBanner, scrollToTwoBanner }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        Waheed Iqbal
        <div className={styles.logoWrapper}>
          <Image
            src={HeaderLogo}
            alt="Waheed Iqbal logo"
            width={50}
            height={50}
          />
        </div>
      </h1>
      <ul className={styles.navItems}>
        <li className={`navHover ${styles.work}`} onClick={scrollToOneBanner}>
          WORK
        </li>
        <li className={`navHover ${styles.work}`} onClick={scrollToTwoBanner}>
          ABOUT
        </li>
      </ul>
    </div>
  );
};

export default Header;
