import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";


function About() {
    return (
     <section className={styles.container} id = 'about'>
        <h2 className={styles.title}>About us</h2>
        <div className={styles.content}>
        
        <img src={getImageUrl("about/aboutimage.png")} alt="hovering on about" className={styles.aboutImage}/>
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='Excellence'/>
                <div className={styles.aboutItemText}>
                    <h3>Excellence</h3>
                    <p>At the core of our DNA is an unwavering commitment to excellence. strive for nothing less than exceptional outcomes in every endeavor, 
                        ensuring our clients not only receive solutions but experience the pinnacle of quality.</p>
                </div>

            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt='Integrity'/>
                <div className={styles.aboutItemText}>
                    <h3>Integrity</h3>
                    <p>Our foundation is built on the bedrock of integrity. We uphold the highest ethical standards, 
                        fostering trust and transparency in all our interactions. 
                        This ensures that our clients and partners experience a 
                        level of honesty and reliability that forms the backbone of enduring relationships.</p>
                </div>

            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt='Collabration'/>
                <div className={styles.aboutItemText}>
                    <h3>Collabration</h3>
                    <p>We champion the power of collaboration. Recognizing that great achievements are seldom solitary. 
                        Through close collaboration, we unlock synergies, 
                        combining our expertise with theirs to achieve shared goals and aspirations that go beyond individual accomplishments.</p>
                </div>

            </li>
            <li className={styles.aboutItem}> 
                <img src={getImageUrl("about/serverIcon.png")} alt='Innovation'/>
                <div className={styles.aboutItemText}>
                    <h3>Innovation</h3>
                    <p>We celebrate innovation as the driving force behind progress. In our relentless pursuit of excellence, 
                        we actively seek fresh and inventive approaches. By embracing innovation, we continually redefine possibilities,
                         ensuring our clients not only keep up with the times but lead the way in their industries.</p>
                </div>

            </li>
        </ul>
        </div>
     </section>
    )
}

export default About;
