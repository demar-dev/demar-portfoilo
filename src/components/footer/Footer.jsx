import styles from "./footer.module.css";
import { footerLink, Socials } from "../../const";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className={styles.footerLogo}>
        DEMAR
      </a>

      <div className={styles.footerSocials}>
        {Socials.map(({ id, link, icon }) => (
          <a href={link} key={id} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        ))}
      </div>

      <ul className={styles.permaLinks}>
        {footerLink.map(({ id, section }) => {
          const hrefValue = section.toLowerCase();

          return (
            <li key={id}>
              <a href={`#${hrefValue}`}>{section}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
