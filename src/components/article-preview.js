import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.virtuals.previewImage} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.uniqueSlug}`}>{article.title}</Link>
    </h3>
    <small>{article.createdAt}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.subtitle,
      }}
    />
  </div>
);
