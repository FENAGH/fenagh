const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/blog.js`)

  const { data, errors } = await graphql(`
    {
      allContentfulBlogPost {
        nodes{
          id
          slug
        }
      }
    }
  `);
  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  data.allContentfulBlogPost.nodes.forEach((blog) => {
    createPage({
      path:  `/noticias-y-eventos/${blog.slug}`,
      component: template,
      context: {
        id: blog.id
      },
    });
  });
}