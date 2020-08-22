import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/writing/">Writing</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
);
