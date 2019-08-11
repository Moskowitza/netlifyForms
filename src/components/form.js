import React, { useState } from "react"

const Form = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <form name="contact" netlify>
      <p>
        <label htmlFor="userName">
          User Name
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Form
