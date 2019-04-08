import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#4f2d8f`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1140,
        padding: `30px 40px`,
      }}
    >
      <h1 className={styles.mainHeader}>
        <svg
          className="svg-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 199.6 40.4"
          width="200"
          height="41"
        >
          <path
            fill="#f48120"
            d="M192.7 0l-4.4 14.7-2.5-.1-3.5-10.1-6.5 1.9 4.4 15.2h13.6l5.8-19.4-6.9-2.2z"
          />
          <g className="text">
            <path
              d="M42.9 39.5h7.6V13.8h-7.6v25.7zM97.9 23.5c-2.1-.6-4.2-1.3-4.2-2.7a2 2 0 0 1 1.1-1.7c1.3-.6 3.6-.1 5.7 1.9l5.6-3a11.11 11.11 0 0 0-9.7-5.1c-5 0-10 2.6-10 8.4 0 5.6 4.9 7 8.9 8.1 2.3.6 4.1 1.1 4.1 2.4 0 1.6-1.9 2.4-3.3 2.4a6.92 6.92 0 0 1-5.4-2.8l-5.2 3.1c2 3.8 5.7 5.8 10.8 5.8s10.6-2.2 10.6-8.4c-.1-6-5-7.3-9-8.4M119 39.5V25.9c0-3.6 1.9-5.6 5.1-5.6a4.69 4.69 0 0 1 3.5 1.5 4.75 4.75 0 0 1 1.3 3.5l.1 14.3h7.4V23.7a9.66 9.66 0 0 0-5.2-9 11.89 11.89 0 0 0-11.7.3l-.5.3v-1.6h-7.5l.1 25.8zM158.4 31.3a6.16 6.16 0 0 1-8.6.1 6.52 6.52 0 0 1-1.7-4.6 6.77 6.77 0 0 1 1.7-4.7 5.66 5.66 0 0 1 4.3-1.8 6.15 6.15 0 0 1 4.3 1.8 6.34 6.34 0 0 1 1.8 4.6 6.34 6.34 0 0 1-1.8 4.6zm3.6-17.4v2.5l-.6-.5a12.63 12.63 0 0 0-8.5-2.8 11.93 11.93 0 0 0-8.8 3.9 13.43 13.43 0 0 0-3.8 9.7 13.61 13.61 0 0 0 3.7 9.7 12 12 0 0 0 8.8 3.8 13 13 0 0 0 8.5-2.8l.6-.5v2.5h6.2V13.8zM28.9 31.1h-.7l-6.1-17.3h-6.3L9.7 31.1H9L7.3 13.9H0l3 25.6h10.7l5.2-15.1 5.3 15.1h10.7l2.9-25.7h-7.2l-1.7 17.3zM69 33.1a6.06 6.06 0 0 1-6.3-6.4 6 6 0 0 1 6.2-6.4 6.18 6.18 0 0 1 6.3 6.4 6 6 0 0 1-6.2 6.4M69 13a13.53 13.53 0 0 0-13.7 13.7 13.7 13.7 0 0 0 27.4 0A13.53 13.53 0 0 0 69 13"
              fill="#ffffff"
            />
          </g>
        </svg>
        <Link
          to="/"
          style={{
            color: `white`,
            fontWeight: `bold`,
            textDecoration: `none`,
            position: `relative`,
            top: `6px`,
          }}
        >
          Adam Traczyk
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
