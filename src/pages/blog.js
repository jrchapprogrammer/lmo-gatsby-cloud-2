// import React from 'react'
// import { graphql } from 'gatsby'
// import get from 'lodash/get'
// import { Helmet } from 'react-helmet'
// import styles from './blog.module.css'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allContentfulBlogPost.edges')

//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={siteTitle} />
//           <div className={styles.hero}>Blog</div>
//           <div className="wrapper">
//             <h2 className="section-headline">Recent articles</h2>
//             <ul className="article-list">
//               {posts.map(({ node }) => {
//                 return (
//                   <li key={node.slug}>
//                     <ArticlePreview article={node} />
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

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
//   }
// `

import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMediumPost.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <SEO title={siteTitle} />

        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.uniqueSlug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
      totalCount
      edges {
        node {
          id
          uniqueSlug
          title
          createdAt(formatString: "MMM YYYY")
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
          author {
            username
          }
        }
      }
    }
    author: mediumUser {
      username
      name
      imageId
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
