import React from "react";
import styles from "../Technologies/Technologies.module.css"
import Marquee from "react-fast-marquee";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Technolgies = () => {
    return (
        <section className={styles.container} id="Technologies">
            <h2 className={styles.title}>Technologies</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <Marquee direction="left" speed={50}>
                        {skills.map((skill, index) => (
                            <div className={styles.skillImageContainer}>

                                <span key={index}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    <p>{skill.title}</p>
                                </span>
                            
                            </div>
                            ))}
                    </Marquee>
                </div>


            </div>
        </section>
    );
};

export default Technolgies;



{/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}


<div className={styles.skills}>
    <div className="slider">
        <span style="--i:1;"><img src="assets/skills/css.png" /></span>
        <span style="--i:2;"><img src="assets/skills/figma.png" /></span>
        <span style="--i:3;"><img src="assets/skills/graphql.png" /></span>
        <span style="--i:4;"><img src="assets/skills/html.png" /></span>
        <span style="--i:5;"><img src="assets/skills/mongodb.png" /></span>
        <span style="--i:6;"> <img src="assets/skills/node.png" /></span>
        <span style="--i:7;"><img src="assets/skills/react.png" /></span>

    </div>
</div>

