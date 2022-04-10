
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        props: { modules: ['projects'] }
      },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      {
        path: 'projects',
        component: () => import('pages/ProjectMarketplace.vue'),
        children: [
          { path: ':id', component: () => import('pages/Project.vue') }
        ]
      },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'sign-up', component: () => import('pages/SignUp.vue') },
      { path: 'users/:id', component: () => import('pages/Profile.vue') }
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
