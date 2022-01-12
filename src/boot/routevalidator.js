import { boot } from 'quasar/wrappers'

export default boot(({ router, store, redirect }) => {
  router.beforeEach((to, from,
    next) => {
    const pathSubstr = to.path.split('/')[1]
    const upperCasePath = pathSubstr.charAt(0).toUpperCase() +
      pathSubstr.slice(1)
    const singlePathObj = upperCasePath.slice(0, upperCasePath.length - 1)
    let data, currentObject

    if (!store.hasModule(pathSubstr)) {
      next()
    } else {
      store.dispatch(`${pathSubstr}/get${upperCasePath}`)
        .then(() => {
          data = store.getters[`${pathSubstr}/get${upperCasePath}`]
          if (data && data.length) {
            if (Object.keys(to.params).length) {
              currentObject = {
                ...data.find(object => Number(object.id) ===
                Number(to.params.id))
              }
              if (Object.keys(currentObject).length) {
                store.dispatch(`${pathSubstr}/setCurrent${singlePathObj}`, currentObject)
                next()
              } else redirect('/page404')
            } else next()
          } else redirect('/page404')
        })
        .catch(error => {
          console.log(error)
          redirect('/page404')
        })
    }
  })
})
