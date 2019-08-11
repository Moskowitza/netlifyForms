/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget"

import Header from "./header"
import "./layout.css"
import "react-netlify-identity-widget/styles.css"

const Layout = ({ children }) => {
  const url = "https://netlifyforms.netlify.com/" // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <IdentityContextProvider url={url}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © 
{' '}
{new Date().getFullYear()}
, Built with
{` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </IdentityContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
