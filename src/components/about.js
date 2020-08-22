import React from 'react';
import Img from 'gatsby-image';
import styles from './about.module.css';

const About = ({ data }) => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutText}>
        <p>{data.shortBio.shortBio}</p>
      </div>
      <div className={styles.image}>
        <Img
          className={styles.image}
          alt={data.name}
          fluid={data.heroImage.fluid}
        />
      </div>
    </div>
  );
};

export default About;
