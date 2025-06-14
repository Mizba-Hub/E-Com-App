import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About-Page</title>
      </Head>
      <div className="about-us-container">
        <div className="d-flex justify-content-center align-items-center">
          <Image src={"/images/logo.jpg"} alt="logo" height={150} width={150} />
        </div>
        <h1> 🛒 About Us</h1>
        <p>
          Welcome!!! Your trusted online marketplace for everything you need.
        </p>
        <p>
          Our goal is simple: to make online shopping fast, easy, and
          affordable. Whether you’re looking for electronics, fashion, home
          essentials, beauty products, or more, we’ve got you covered with a
          growing range of high-quality items from trusted sellers and brands.
        </p>
        <hr />
        <h2> 🎯 Our Mission</h2>
        <p>
          To deliver convenience, variety, and trust in every shopping
          experience.
        </p>
        <hr />
        <h2> 📱 Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out!
        </p>
        Email: <Link href={"#"}>support@1.com</Link> | Phone: +123 456 789
      </div>
    </>
  );
}
