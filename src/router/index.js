import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes";



const Router = createRouter({
scrollBehavior: () => ({ left: 0, top: 0 }),
routes,

// Leave this as is and make changes in quasar.conf.js instead!
// quasar.conf.js -> build -> vueRouterMode
// quasar.conf.js -> build -> publicPath
history: createWebHistory(process.env.BASE_URL)
});

Router.beforeResolve(async function (to, _, next) {
    next();
});

export default Router;

