import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, tags, slug, author, description }) => {
  return (
    <Link className="blog">
      <article>
        {image &&
          <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="blog-img" title="blog" />
        }
        <div className="blog-card">
          <div className="project-stack" style={{ textAlign: `center ` }}>
            {tags.map((item) => {
              return (
                <span key={item.id} style={{ backgroundColor: `orchid`, color: `white` }}>{item.name}</span>
              )
            })}
          </div>
          <br />
          <h4 style={{ textAlign: `center` }} >{title}</h4>
          <p style={{ textAlign: `justify` }}>{description}</p>
          <div className="blog-footer">
            <p>{author.username}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

Blog.propTypes = {
  id:  PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  date:  PropTypes.string.isRequired,
  tags:  PropTypes.arrayOf(PropTypes.object).isRequired,
  description:  PropTypes.string.isRequired,
  slug:  PropTypes.string.isRequired,
  author:  PropTypes.object.isRequired,
  image:  PropTypes.object.isRequired,
}

export default Blog
