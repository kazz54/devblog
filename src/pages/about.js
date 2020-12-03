import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
//import Head from "../components/head"
import  "./contact.module.scss"
export const query = graphql`
{
    contentfulAbout {
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const About = props => {
 


  return (
    <Layout>
      
      
       
    <div className="containerbdy" dangerouslySetInnerHTML={{ __html: props.data.contentfulAbout.body.childMarkdownRemark.html, }} />
	

   
    </Layout>
  )
}

export default About
