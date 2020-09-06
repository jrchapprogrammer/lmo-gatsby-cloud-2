import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import About from '../components/about';

function RootIndex(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const [author] = get(props, 'data.allContentfulPerson.edges');
  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <About data={author.node} />
      </div>
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: {}) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            id
            fluid(
              background: "rgb:000000"
              resizingBehavior: PAD
              maxHeight: 480
              maxWidth: 1180
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
