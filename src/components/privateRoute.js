import React from "react"
import { navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity-widget"

const PrivateRoute = ({ component }) => {
  const url = `https://gatsbyauthvid.netlify.com/`
  const user = useIdentityContext(url)
  if (!user.isLoggedIn) {
    navigate("/")
    return null
  }
  return <>{component()}</>
}
export default PrivateRoute
