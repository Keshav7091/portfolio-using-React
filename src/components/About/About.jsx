import React from 'react';

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/mypic.JPG")} alt="Me sitting with a leptop" />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />

                    <div className={styles.aboutItemText}>
                        <h3>FrontEnd Developer</h3>
                        <p>I have learned HTML, CSS, JavaScript, and also React JS.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server" />

                    <div className={styles.aboutItemText}>
                        <h3>BackEnd Developer</h3>
                        <p>I have learned Python , Django Web Framwork</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI" />

                    <div className={styles.aboutItemText}>
                        <h3>Database</h3>
                        <p>I have also learned about Database like SQL, PostgreSQL, SQLite, MySQL.</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default About
