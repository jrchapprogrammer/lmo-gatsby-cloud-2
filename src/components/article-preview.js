import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
const MEDIUM_URL = 'https://medium.com';

export default ({ article }) => (
  <div className={styles.preview}>
    <img
      alt={article.title}
      src={`${MEDIUM_CDN}/${article.virtuals.previewImage.imageId}`}
      height="200px"
    />
    <h3 className={styles.previewTitle}>
      <a
        href={`${MEDIUM_URL}/${article.author.username}/${article.uniqueSlug}`}
      >
        {article.title}
      </a>
    </h3>
    <small>{article.createdAt}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.subtitle,
      }}
    />
  </div>
);
