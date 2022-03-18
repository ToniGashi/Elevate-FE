import { boot } from 'quasar/wrappers'
import gtm from 'src/components/gtm'

export default boot(({ router }) => {
  router.afterEach((to, from) => {
    gtm.logPage(to.path)
  })
})
