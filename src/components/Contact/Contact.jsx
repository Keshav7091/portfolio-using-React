import React from 'react';

import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>

        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:keshavk1002003@gmail.com" target='_blank'>gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/keshavkumar09/" target='_blank'>linkedin.com/in</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/Keshav7091" target='_blank'>github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
