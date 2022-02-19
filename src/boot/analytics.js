import gtm from 'src/components/gtm'
import { boot } from 'quasar/wrappers'

export default boot(({ router }) => {
  router.afterEach((to, from) => {
    gtm.logPage(to.path)
  })
})
