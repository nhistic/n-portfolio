import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  query {
    allStrapiAbout {
      edges {
        node {
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
  }
`

const Hero = () => (

  <StaticQuery
    query={query}
    render={data => (

      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>i'm wadidin</h1>
              <h4 style={{textTransform: `none`}}>- Software Engineer</h4>
              <h4 style={{textTransform: `none`}}>- Street Photographer</h4>
              <Link to='/contact/' className="btn">
                contact me
              </Link>
              <br/>
              <a href="https://www.canva.com/design/DAE0EluFA9U/q8G5J8sxCYhKDIs0JpbeQw/view/" className="btn" target="_blank">
                my CV
              </a>
              <br/>
              <a href="https://www.canva.com/design/DAE0k8RsCkY/U1MM1JYgqoUQwaINT-s50g/view/" className="btn" target="_blank">
                my Certificates
              </a>
              <SocialLinks />
            </div>
          </article>
            {data.allStrapiAbout.edges.map(about => (
              <GatsbyImage image={about.node.image.localFile.childImageSharp.gatsbyImageData} className="hero-img" title="avatar" />
            ))}
        </div>
      </header>

    )}
  />
)

export default Hero