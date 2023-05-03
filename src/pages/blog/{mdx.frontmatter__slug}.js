import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const BlogPost = ({data,children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout title={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
      {children}
    </Layout>
  )
}
export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost