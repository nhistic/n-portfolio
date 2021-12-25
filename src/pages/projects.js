import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from "../components/projects"
import Seo from "../components/seo"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects }
  },
}) => {
  return (
    <Layout>
      <Seo title="Project Me"/>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`{
  allStrapiProjects(sort: {fields: createdAt, order: ASC}) {
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
}
`

export default ProjectsPage
