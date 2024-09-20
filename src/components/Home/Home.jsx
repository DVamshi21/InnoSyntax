import React from 'react';
import styles from './Home.module.css';
import { getImageUrl } from '../../utils';

const Home = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}>You Name it,We solve it</h1>
                <p className={styles.description}>We are specialized in delivering customized digital solutions to business and will improve operational efficency,streamline workflows and accelerate
                    growth through cutting-edge technlogy. We do innovations and provide consulting,system integration,cloud solutions cybersecurity
                    and ongoing technical support
                </p>
                <a href='mailto:padmatulasi09@gmail.com' className={styles.contactBtn}>Contact Me</a>

            </div>
            <img src= {getImageUrl("hero/heroImage.png")} alt="home image of mc" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />


        </section>
    )
}

export default Home
