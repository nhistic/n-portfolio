 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             image
             author
             twitterUsername
             siteUrl
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `viewport`,
           content: `width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`,
         },
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
          property: `og:title`,
          content: title,
        },
         {
           property: `og:type`,
           content: `website`,
         },
         {
          property: `image`,
          content: `website`,
        },
         {
          property: `og:image`,
          content: `website`,
        },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: `welcome to my portfolio site. situs ini berisi portfolio saya dan juga berisi tulisan, opini serta dokumentasi pribadi saya yang sedang belajar atau membagikan sesuatu.`,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 