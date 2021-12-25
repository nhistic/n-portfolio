import * as React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4 style={{ textTransform: `none` }}>
          &copy; 2020-{ new Date().getFullYear() } <span style={{ color: `orchid` }}>nSite Portfolio</span> 
        </h4>
        <h4 style={{ textTransform: `none` }}>
          Built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: `orchid` }}> GatsbyJS </a> and <a href="https://www.strapi.io/" target="_blank" rel="noopener noreferrer" style={{ color: `orchid` }}> StrapiJS</a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
