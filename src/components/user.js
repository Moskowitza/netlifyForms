import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import Form from "./form"

const User = () => {
  const url = `https://gatsbyauthvid.netlify.com/`

  const identity = useIdentityContext(url)

  return (
    <>
      <h1>{`You are logged in as${identity.user.user_metadata.full_name}`}      </h1>
      <pre>{JSON.stringify(identity, null, 4)}</pre>
      <Form identity={identity} />
    </>
  )
}
export default User
