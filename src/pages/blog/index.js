import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { graphql,Link } from "gatsby";

const blog = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
    );
};

export const que = graphql`
query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        
      }
    }
  }
`;

export const Head = () => <Seo title={"Blog"} />;
export default blog;
