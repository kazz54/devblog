import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import  "./contact.module.scss"
export const query = graphql`
{
    contentfulContact {
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Contact = props => {


  return (
    <Layout>
      
      
       
    <div className="containerbdy" dangerouslySetInnerHTML={{ __html: props.data.contentfulContact.body.childMarkdownRemark.html, }} />
	<a className='icons' href='https://www.instagram.com/devduara0/'>
      <FontAwesomeIcon icon={faInstagram} size="1x" />
    </a>
     <a className='icons' href='https://github.com/devduara0/'>
      <FontAwesomeIcon icon={faGithub} size="1x" />
    </a>
     
    </Layout>
  )
}

export default Contact
