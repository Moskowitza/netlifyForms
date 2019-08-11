import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"

const Header = ({ siteTitle }) => {
  const url = "https://netlifyforms.netlify.com/" // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway

  const [dialog, setDialog] = useState(false)
  const identity = useIdentityContext(url)

  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName"
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <button type="button" className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "Log In"}
        </button>
      </div>
      <div style={{ background: `white` }}>
        {isLoggedIn ? <Link to="/app/profile">User</Link> : ""}
      </div>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
