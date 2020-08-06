import React from "react"
import PropTypes from "prop-types"

const Navbar = ({ changeToggledClass }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button
          className="btn btn-primary"
          id="menu-toggle"
          onClick={changeToggledClass}
          type="button"
        >
          Toggle Menu
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                API <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/e2e">
                E2E
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  changeToggledClass: PropTypes.func.isRequired,
}

export default Navbar
