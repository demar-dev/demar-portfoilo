import { FaArrowDown } from "react-icons/fa";
import styles from "./header.module.css";
import CTA from "./CTA";
import { me } from "../../assets/images";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home" className={`container ${styles.headerContainer} `}>
      <div>
        <h5>Hello I'm</h5>
        <h1>DEMAR CASSIUS</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <a href="#contact" className={styles.scrollDown}>
          <FaArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
