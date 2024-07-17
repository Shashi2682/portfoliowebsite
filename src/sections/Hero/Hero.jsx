import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.he}
          alt="Profile picture of Shashikant Nalawade"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Shashikant 
          <br />
          Nalawade
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/Shashi2682" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shashikant-nalawade/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          An upbeat sel-motivated team player with excellent logic building and communication skills, looking forward to gain practical knowledge
        </p>
        <a href="https://drive.google.com/file/d/1AJbFWX1jJM9GvD-BdNx9BAzFLM8GQe2Z/view?usp=drive_link" >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
