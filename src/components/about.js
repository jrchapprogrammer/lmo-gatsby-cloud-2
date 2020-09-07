import React from 'react';
import Img from 'gatsby-image';
import styles from './about.module.css';

function About({ data }) {
  console.log(data);
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutText}>
        <p>{data.shortBio.shortBio}</p>
      </div>
      <div className={styles.image}>
        {/* <img
          // className={styles.image}
          alt={data.name}
          src={data.image.fluid.src}
          // fluid={data.image.fluid}
        /> */}
        <img
          alt="author image"
          src="https://miro.medium.com/fit/c/350/350/1*An5DXaNrS0Mrgzzck3YoNA.jpeg"
        />
      </div>
    </div>
  );
}

export default About;
