const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import("../views/Home.vue"),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import("../views/Contact.vue")
    },
]

export default routes;