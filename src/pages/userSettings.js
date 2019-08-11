import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import User from "../components/user"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <User />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
