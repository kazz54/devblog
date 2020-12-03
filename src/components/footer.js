import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata { 
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <fp>
          Site ina endelezwa ne {data.site.siteMetadata.author} &copy;{" "}
          {new Date().getFullYear().toString()}{" "}
        </fp>
      </div>
    </footer>
  )
}

export default Footer
