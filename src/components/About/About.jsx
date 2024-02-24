import React from 'react';

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a leptop" />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />

                    <div className={styles.aboutItemText}>
                        <h3>FrontEnd Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur!</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server" />

                    <div className={styles.aboutItemText}>
                        <h3>BackEnd Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur!</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI" />

                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur!</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default About
