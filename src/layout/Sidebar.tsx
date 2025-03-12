import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      {/* 로고 */}
      <header>
        <a href="/">
          <img src="/public/images/main/ubob_logo.png" alt="Logo" className={styles.logo} />
        </a>
      </header>

      {/* 사이드바 메뉴 */}
      <div className={styles.sidenav}>
        {/* Foundations 섹션 */}
        <div className={styles.sidenav__section}>
          <h6 className={styles.sidenav__title}>Foundations</h6>
          <ul className={styles.sidenav__list}>
            <li className={styles.sidenav__item}>
              <Link to="/foundations/color" className={styles.sidenav__link}>Color</Link>
            </li>
            <li className={styles.sidenav__item}>
              <Link to="/foundations/typography" className={styles.sidenav__link}>Typography</Link>
            </li>
            <li className={styles.sidenav__item}>
              <Link to="/foundations/motion" className={styles.sidenav__link}>Motion</Link>
            </li>
            <li className={styles.sidenav__item}>
              <Link to="/foundations/states" className={styles.sidenav__link}>States</Link>
            </li>
          </ul>
        </div>

        {/* Components 섹션 */}
        <div className={styles.sidenav__section}>
          <h6 className={styles.sidenav__title}>Components</h6>
          <ul className={styles.sidenav__list}>
            {[
              "accordion", "avatar", "badge", "breadcrumb", "button", "card",
              "combobox", "comment", "dialog", "divider", "dropdown",
              "icon", "input", "link", "pagination", "progressbar",
              "radio", "select", "skeleton", "spinner", "tablist",
              "tag", "textarea", "toast", "tooltip"
            ].map((component) => (
              <li key={component} className={styles.sidenav__item}>
                <Link to={`/component/${component}`} className={styles.sidenav__link}>
                  {component.charAt(0).toUpperCase() + component.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;