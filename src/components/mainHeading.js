import React from 'react';
import { Link } from 'gatsby';
import styles from './mainHeading.module.css';

function MainHeading({ data }) {
  return (
    <div className={styles.mainTitleContainer}>
      <Link to="/">
        <h1 className={styles.mainTitle}>{data.name}</h1>
      </Link>
    </div>
  );
}

export default MainHeading;
