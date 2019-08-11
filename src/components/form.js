import React, { useState } from "react"
import axios from 'axios';

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}
const Form = ({identity}) => {
  const {user}=identity;
  const id=user.id
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        // We can add the userID into the form submission
        id,
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
  const getFormData=()=>{
    axios(`.netlify/functions/getUserInfo?id=${user.id}`)
    .then(x => x.json())
    .then(x => {
        this.setState({reviews: x})
    })

if(netlifyIdentity.currentUser() != null){
    this.setState({loggedIn: true});
}

netlifyIdentity.on("login", user => this.setState({loggedIn: true}));
netlifyIdentity.on("logout", () => this.setState({loggedIn: false}));
}
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
          Address
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
