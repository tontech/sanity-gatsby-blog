export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e22cf40fbe8054489c9f77b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hd3dhhiy',
                  apiId: '31737e56-7cdc-45ff-8e87-a567a0036d5d'
                },
                {
                  buildHookId: '5e22cf40399260605c0c42a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fycb7vyf',
                  apiId: 'b78e52b7-85db-4b90-b5d2-b29f84564768'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tontech/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fycb7vyf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
