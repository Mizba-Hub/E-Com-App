import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="ms-5">
        <h3>Get to know us</h3>
        <p>
          Careers
          <br />
          Blog
          <br />
          About Amazon
          <br />
          Investor Relations
          <br />
          Amazon Devices
          <br />
          Amazon Science
        </p>
      </div>

      <div>
        <h3>Amazon Payment Products</h3>
        <p>
          Amazon Business Card
          <br />
          Shop with Points
          <br />
          Reload Your Balance
          <br />
          Amazon Currency Converter
        </p>
      </div>

      <div>
        <h3>Make money with us </h3>
        <p>
          Sell PRoducts on Amazon
          <br />
          Sell on Amazon Business
          <br />
          Become an Affiliate
          <br />
          Self-Publish with us
        </p>
      </div>
    </div>
  );
}
