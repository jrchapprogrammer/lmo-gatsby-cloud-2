import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import './base.css';
import Container from './container';
import MainHeading from '../components/mainHeading';
import Navigation from './navigation';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    const [author] = get(this, 'props.data.allContentfulPerson.edges');

    return (
      <Container>
        <MainHeading data={author.name} />
        <Navigation />
        {children}
      </Container>
    );
  }
}

export default Template;

export const staticQuery = graphql`
  query layoutQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
