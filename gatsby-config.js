/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `My first gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp'
    ],
};
