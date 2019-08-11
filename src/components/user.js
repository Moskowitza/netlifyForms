import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import Form from "./form"

const User = () => {
  const url = `https://gatsbyauthvid.netlify.com/`

  const user = useIdentityContext(url)

  return (
    <>
      <h1>{`You are logged in as${user.user.user_metadata.full_name}`}      </h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <Form />
    </>
  )
}
export default User
