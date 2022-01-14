import { boot } from 'quasar/wrappers'

let data = [], currentObject = {}

export default boot(({ router, store, redirect }) => {
  router.beforeEach((to, from,
    next) => {
    const pathSubstr = to.path.split('/')[1]
    const upperCasePath = pathSubstr.charAt(0).toUpperCase() +
      pathSubstr.slice(1)
    const singlePathObj = upperCasePath.slice(0, upperCasePath.length - 1)

    if (!store.hasModule(pathSubstr)) {
      next()
    } else {
      store.dispatch(`${pathSubstr}/get${upperCasePath}`)
        .then(() => {
          data = store.getters[`${pathSubstr}/get${upperCasePath}`]
          if (data && data.length) {
            if (to.params && Object.keys(to.params).length) {
              store.dispatch(`${pathSubstr}/setCurrent${singlePathObj}`, to.params.id)
              currentObject = store.getters[`${pathSubstr}/getCurrent${singlePathObj}`]
              if (currentObject && Object.keys(currentObject).length) {
                next()
              } else redirect('/page404')
            } else next()
          } else redirect('/page404')
        })
        .catch(error => {
          console.log(error)
        })
    }
  })
})

export { data, currentObject }
