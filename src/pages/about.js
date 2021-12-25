import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Title from "../components/title"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const About = ({
  data: {
    about: { nodes },
  },
 }) => {
   const { title, stack, content, image } = nodes[0]

  return (
    <Layout>
      <Seo title="About Me"/>
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="about-img" title="avatar" />
          <article className="about-text">
            <Title title={title} />
            <ReactMarkdown children={content} />
            <div className="about-stack">
              {stack.map((item) => {
                return (
                  <span key={item.id}>{item.name}</span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`{
  about: allStrapiAbout {
    nodes {
      stack {
        id
        name
      }
      title
      content
      image {
        localFile {
          childImageSharp{
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`

export default About
