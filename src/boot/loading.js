import { boot } from 'quasar/wrappers'
import { Loading, QSpinnerHearts } from 'quasar'

Loading.setDefaults({
  spinner: QSpinnerHearts,
  backgroundColor: 'positive'
})

const showLoader = () => Loading.show()

const hideLoader = () => Loading.hide()

export default boot(({ app }) => {
  app.config.globalProperties.$showLoader = showLoader

  app.config.globalProperties.$hideLoader = hideLoader
})
