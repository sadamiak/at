/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import fbLogo from "../images/fb.svg"
import twitterLogo from "../images/twitter.svg"
import { FacebookProvider, Page } from "react-facebook"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          <footer>
            <div className="feedContainer">
              <div>
                <FacebookProvider appId="519495091756536" language={"pl_PL"}>
                  <Page
                    href="https://www.facebook.com/AdamTraczykWiosna/"
                    tabs="timeline"
                    width="320"
                    height="400"
                    small-header="false"
                    adapt-container-width="true"
                    hide-cover="false"
                    show-facepile="true"
                  />
                </FacebookProvider>
              </div>
              <div>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="a_traczyk"
                  options={{ height: 400, width: 320, borderRadius: 0 }}
                  noScrollbar
                  lang="pl"
                />
              </div>
            </div>
            <div>
              <a
                href="https://www.facebook.com/AdamTraczykWiosna/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <img src={fbLogo} alt="facebook logo" />
              </a>
              <a
                href="https://twitter.com/a_traczyk"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <img src={twitterLogo} alt="twitter logo" />
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
