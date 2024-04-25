/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Login from "../Login/Login";
import styles from "./LoginLayout.module.css";
import ArrowUpSvg from "../../assets/ouiarrowup.svg";
import MatarialSvg from "../../assets/materialsymbolssettings.svg";
import ProfileSvg from "../../assets/iconamoonprofilefill.svg";
import GlobalLogo from "../../assets/image-13@2x.png";

const LoginLayout = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.image12Wrapper}>
          <img
            className={styles.image12Icon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
        <div className={styles.group}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/5138237-1@2x.png"
          />
          <h2 className={styles.recruitingFacultyAndContainer}>
            <p className={styles.recruiting}>Recruiting</p>
            <p className={styles.facultyAndNurses}>Faculty and Nurses</p>
            <p className={styles.since1994}>Since 1994</p>
          </h2>
        </div>
      </div>
      <div className={styles.rightContent}>
        <nav>
          <ul>
            <li>
              <a href="#">About Us</a>
              <span>
                <img loading="lazy" alt="" src={ArrowUpSvg} />
              </span>
            </li>
            <li>
              <a href="#">Vacancies</a>
            </li>
            <li>
              <a href="#">Company</a>
              <span>
                <img loading="lazy" alt="" src={ArrowUpSvg} />
              </span>
            </li>
            <li>
              <a href="#">Health Sector</a>
            </li>
            <li>
              <a href="#">Education Sector</a>
            </li>
            <li>
              <img loading="lazy" alt="" src={MatarialSvg} />
            </li>
            <li>
              <img loading="lazy" alt="" src={ProfileSvg} />
            </li>
          </ul>
        </nav>
        <section className={styles.parent}>
          <img
            loading="lazy"
            alt=""
            src={GlobalLogo}
            className={styles.secondaryLogo}
          />
        </section>
        <div className={styles.globalPlacementsIs}>
          Global Placements is an international people recruitment firm
          established in 1994. Pioneers in illuminating international
          opportunities for teaching and healthcare professionals.
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginLayout;
