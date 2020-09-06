import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './base.css';
import Container from './container';
import MainHeading from '../components/mainHeading';
import Navigation from './navigation';

export default function Layout({ children }) {
  const layoutQuery = useStaticQuery(
    graphql`
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
    `
  );

  return (
    <Container>
      <MainHeading data={layoutQuery.allContentfulPerson.edges[0].node} />
      <Navigation />
      {children}
    </Container>
  );
}
