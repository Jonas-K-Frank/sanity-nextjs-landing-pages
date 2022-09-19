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
                  buildHookId: '632856cf530de2199bd438cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-976v5zny',
                  apiId: '60e87f2c-3ba9-4723-91be-0fa9d627a184'
                },
                {
                  buildHookId: '632856cffcd3741c5b56782c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b3sduvjc',
                  apiId: '74d83292-6cd2-4b60-8133-c397416bca4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jonas-K-Frank/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b3sduvjc.netlify.app', category: 'apps' }
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
