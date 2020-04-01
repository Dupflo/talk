const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    // const postTemplate = path.resolve('src/templates/blog-post.js');
    const services = path.resolve('src/components/contents/services.js');

    return graphql(`
        {
                allMarkdownRemark {
                  edges {
                    node {
                
                      html
                      id
                      frontmatter {
                        path
                        title
                        date
                        author
                      }
                    }
                  }
                }

                allServicesJson {
                  edges {
                    node {
                      slug
                    }
                  }
                }
          }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        }) 

        res.data.allServicesJson.edges.forEach(({ node : { slug } }) => {
          createPage({
              path: `/${slug}/`,
              component: services,
              context: { slug }
          })
      }) 


    })
}