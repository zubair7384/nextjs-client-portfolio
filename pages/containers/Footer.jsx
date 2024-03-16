import React from "react";
import Image from "next/image";
import FooterLogo from "../../public/footerLogo.svg";
import styles from "./scss/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTextWrapper}>
        <p className={styles.footerText}>
          Contact me today to schedule a consultation and learn more about how I
          can help you achieve your marketing goals.
        </p>
      </div>
      <h3 className={styles.number}>+971 54 399 8496</h3>
      <h3 className={styles.email}>hello@waheediqbal.com</h3>
      <div className={styles.socialWrapper}>
        <h3 className={styles.insta}>INSTAGRAM</h3>
        <h3 className={styles.link}>LINKEDIN</h3>
      </div>
      <div className={styles.copyWrapper}>
        <p className={styles.p}>© 2023 COPYRIGHT - WAHEED IQBAL</p>
        <Image
          src={FooterLogo}
          alt="Waheed Iqbal logo"
          width={50}
          height={50}
        />
        <p style={{ textAlign: "end" }} className={styles.p}>
          privacy policy - cookieS
        </p>
      </div>
    </div>
  );
};

export default Footer;
