import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { container, linkRow } from './layout.module.scss'

const Layout = ({ title, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <div className={container}>
            <h1>{data.site.siteMetadata.title}</h1>
            <div className={linkRow}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}

export default Layout