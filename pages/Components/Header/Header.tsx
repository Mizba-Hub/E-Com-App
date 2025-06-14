import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 d-flex align-items-center">
        <div className={`container-fluid ${styles.nav}`}>
          <div className="d-flex align-items-center mx-5">
            <Image src="/images/logo.jpg" alt="logo" height={50} width={50} />
          </div>

          <div className={styles.searchbar}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for Products, Brands & More"
              className={styles.searchInput}
            />
          </div>

          <ul className="navbar-nav me-auto mb-0 d-flex flex-row ">
            <li className="nav-item me-4">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link href="/Login" className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link href="/About" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link href="/Contact" className="nav-link">
                Contact Us
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link href="/Cart" className="nav-link">
                <Image
                  src={"/images/cart.png"}
                  alt="cart"
                  height={20}
                  width={15}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
