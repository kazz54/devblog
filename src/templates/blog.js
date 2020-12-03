import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      titile
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark { html }
      }
    }
  }
`

const Blog = props => {
  

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.titile}/>
      <h1>{props.data.contentfulBlog.titile}</h1>
	  {props.data.contentfulBlog.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlog.featuredImage.fluid}
            alt={props.data.contentfulBlog.titile}
          />
        )}
    <div className="containerbdy" dangerouslySetInnerHTML={{ __html: props.data.contentfulBlog.body.childMarkdownRemark.html, }} />
     
    </Layout>
  )
}

export default Blog
