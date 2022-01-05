import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import Seo from "../components/seo"

const Index = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } =  data

  return (
    <Layout>
      <Seo title="Welcome to mySite Portfolio" keyword={['nhistic', 'portfolio', 'mySite']}/>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured porjects" showLink />
      <Blogs blogs={blogs} title="latest posts" showLink />
    </Layout>
  )
}

export const query = graphql`{
  allStrapiProjects(
    filter: {featured: {eq: true}}
    sort: {fields: createdAt, order: ASC}
    limit: 3
  ) {
    nodes {
      github
      id
      description
      title
      url
      image {
        localFile {
          childImageSharp{
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      stack {
        id
        name
      }
    }
  }
  allStrapiBlogs(
    filter: {author: {id: {eq: "61c4c21898938004ea881de2"}}}
    sort: {fields: date, order: ASC}
    limit: 3
  ) {
    nodes {
      slug
      content
      description
      date(formatString: "MMMM Do, YYYY")
      id
      title
      image {
        localFile{
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      tags {
        id
        name
      }
      author {
        id
        username
      }
    }
  }
}
`

export default Index