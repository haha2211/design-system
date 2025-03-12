import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"  fill="currentColor" >
                        <path className="fa-secondary" opacity=".4" d=""/>
                        <path className="fa-primary" d="M0 64l448 0 0 32L0 96 0 64zM0 224l448 0 0 32L0 256l0-32zM448 384l0 32L0 416l0-32 448 0z"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;