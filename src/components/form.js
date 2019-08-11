import React, { useState } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}
const Form = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        userName,
        email,
        address,
      }),
    })
      .then(() => {
        alert("Success!")
        setUserName("")
        setEmail("")
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    // <form form-name="contact" method="POST" data-netlify="true">
    <form onSubmit={e => handleSubmit(e)}>
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
        <label htmlFor="address">
          Email
          <input
            type="address"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
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
