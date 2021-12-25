import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ title, description, github, stack, url, image, index }) =>  {
  return (
    <article className="project">
      {image &&
        <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="project-img" title="project" />
      }
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">
          {description}
        </p>
        <div className="project-stack">
          {stack.map((item) => {
            return (
              <span key={item.id}>{item.name}</span>
            )
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="project-icon" size={32} />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon" size={32} />
          </a>
        </div>
      </div>
    </article>
  );
}

Project.propTypes = {
  title:  PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired,
  description:  PropTypes.string.isRequired,
  image:  PropTypes.object.isRequired,
  stack:  PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
