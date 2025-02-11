import styles from "./header.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
