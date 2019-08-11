import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import User from "../components/user"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={User} />
    </Router>
  </Layout>
)
export default App
