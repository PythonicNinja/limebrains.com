import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { SectionHeading } from '../components/heading'
import { Img } from '../components/img'
import { Box, FlexBlog } from '../components/flex'
import Bar from '../components/showhidebar'
import { mobileLandscape } from '../components/responsive'
import Carousel from '../components/carousel'
import { Fade } from 'react-reveal';
import { ClientCard, PersonCard } from '../components/card';

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  font-size: 30px;
  color: #8f9297;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Motto = styled.div`
  padding: 2rem;
  text-align: center;
  color: #c2bebe;
  font-style: italic;
  font-size: 60px;

  @media (max-width: ${mobileLandscape}px) {
    font-size: 30px;
  }
`;

const PlaintextTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const person = data.markdownRemark.frontmatter;
  const projects = data.allMarkdownRemark.edges.map(edge => ({
    ...edge.node.frontmatter,
    link: edge.node.fields.slug
  }));

  return (
    <Layout>
      <SEO title={person.seo.title}/>
      <LayoutWrapper>

        <Box>
          <SectionHeading title={`${title} - ${person.position}`}/>
          <Img src={person.image_wide} responsive/>
        </Box>

        <Box mt={'3rem'}/>
        <Motto>{person.motto}</Motto>

        <Box mt={'3rem'}/>

        <Section>
          Areas of expertise
        </Section>

        <Box mt={'3rem'}/>
        <Bar
          header="Server Administration"
          myIndex="0"
          content="Experience with the core AWS services. Good background in Linux/Unix administration."
        />
        <Bar
          header="Backend Development"
          myIndex="1"
          content="Python, Django/REST, Pyramid, PostgreSQL, MySQL, MongoDB, ElasticSearch, AWS, serverless."
        />
        <Bar
          header="Frontend Development"
          myIndex="2"
          content="ReactJS, Angular, ES6, Webpack, Redux, TypeScript"
        />
        <Bar
          header="Test Driven Development"
          myIndex="3"
          content="Unit tests, E2E tests, watchers on production"
        />
        <Box mt={'3rem'}/>

        <Section>
          Some Projects
        </Section>

        <Carousel data={projects}/>

        <FlexBlog mb={'5rem'}>
          <Box>
            <Fade>
              <ClientCard/>
            </Fade>
          </Box>

          <Box>
            <Fade>
              <PersonCard/>
            </Fade>
          </Box>
        </FlexBlog>
      </LayoutWrapper>
    </Layout>
  )
};

export default PlaintextTemplate

export const query = graphql`
    query  PersonTemplateQuery($slug: String!) {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
          title
          subtitle
          image
          image_wide
          position
          motto
          date
          seo {
            title
            description
            noindex
          }
        }
        fields {
          slug
        }
      }
      allMarkdownRemark(filter: { fields: { layout: { eq: "client" } } }) {
      edges {
        node {
          tableOfContents
          timeToRead
          frontmatter {
            title
            subtitle
            description
            website
            motto
            date
            tags
            image
            seo {
              title
              description
              noindex
            }
          }
          fields {
            slug
            layout
          }
        }
      }
    }
  }
`
