export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '63263dc578b23e1a6d216893',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-juxw98c1',
                  apiId: '87b17b5d-c0cb-4eb3-9110-75d3391b3a8e'
                },
                {
                  buildHookId: '63263dc6e2cf5721b44cb6af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2fy7nzkr',
                  apiId: 'a0d5933c-20b2-4187-b84d-eba90dfe3953'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bionicguy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2fy7nzkr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
