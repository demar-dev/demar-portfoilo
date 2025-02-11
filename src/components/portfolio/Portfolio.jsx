import { data } from "../../const";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioContainer} `}>
        {data.map(({ id, image, title, github, desc, technologies }) => {
          return (
            <article key={id} className={styles.portfolioItem}>
              <div className={styles.portfolioItemImage}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className={styles.portfolioItemCta}>
                <p>
                  {desc}
                </p>
                <p>
                {technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyTag}>
                    {tech}
                  </span>
                ))}
              </p>
                {/* <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a> */}
              </div>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
