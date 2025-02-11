import styles from "./about.module.css";
import { aboutCards } from "../../const";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutCards}>
            {aboutCards.map(({ id, logo, heading, description }) => (
              <article key={id} className={styles.aboutCard}>
                <div className={styles.aboutIcon}>{logo}</div>
                <h5>{heading}</h5>
                <small>{description}</small>
              </article>
            ))}
          </div>

          <p className={styles.justifyContent}>
          Experienced Senior MERN Stack Developer with over 8 years of expertise in building robust and scalable web applications using MongoDB, Express.js, ReactJS, Node.js, and Angular. Demonstrated success in designing and deploying high-performance applications, integrating third-party APIs, and enhancing user interfaces with React, Next.js, and Tailwind CSS. Skilled in agile methodologies, Test-Driven Development (TDD), and continuous integration, with a proven ability to lead projects from concept to deployment in fast-paced environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
