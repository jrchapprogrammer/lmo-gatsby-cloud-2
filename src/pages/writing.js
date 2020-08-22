import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
// import styles from './blog.module.css';
import Layout from '../components/layout';
// import ArticlePreview from '../components/article-preview';

const Writing = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  //   const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <SEO title={siteTitle} />
        <h1>`Hi!, You've reached ${siteTitle}`</h1>
      </div>
    </Layout>
  );
};

export default Writing;

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
