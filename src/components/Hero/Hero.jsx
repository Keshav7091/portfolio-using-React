import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Keshav Kumar</h1>
            <p className={styles.description}>I'm a full stack developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt fuga provident dolor, veritatis assumenda esse expedita corporis illum aperiam!</p>
            <a className={styles.contactBtn} href="mailto:keshavk1002003@gmail.com">Contact Me</a>
            
        </div>
        <div className={styles.heroImg}>
          <img src={getImageUrl("hero/myImage.png")} alt="Hero image of me" />
        </div>

        <div className={styles.topBlur} />
        <div className={styles.buttonBlur} />

    </section>
  )
}

export default Hero
