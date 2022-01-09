
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about-us', component: () => import('pages/About.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      {
        path: 'projects',
        component: () => import('pages/ProjectMarketplace.vue'),
        children: [
          { path: ':id(\\d+)', component: () => import('pages/Project.vue') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
