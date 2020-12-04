import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./index.module.scss"


const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog(sort: {fields: body___childMarkdownRemark___frontmatter___date}) {
      edges {
        node {
          id
          titile
          slug
          createdAt(formatString: "DD MMM YYYY")
          featuredImage {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 150)
            }
          }
        }
      }
    }
  }
`
  )
  
     

return (
        <Layout>
            <Head title="Blog"/>
            
            <div className={blogStyles.container}>
                {data.allContentfulBlog.edges.map((edge) => {
                    return (
                         <div className="post" key={edge.node.id}>
						    
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.titile}</h2>
                                
                            </Link>
							
              {edge.node.featuredImage && (
			    <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
			  
			  <p className="excerpt">
                {edge.node.body.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Soma zaidi</Link>
              </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}
   

export default IndexPage