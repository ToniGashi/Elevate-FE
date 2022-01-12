import { boot } from 'quasar/wrappers'

export default boot(({ router, store, ssrContext, redirect }) => {
  router.beforeEach((to, from,
    next) => {
    const pathSubstr = to.path.split('/')[1]
    const upperCasePath = pathSubstr.charAt(0).toUpperCase() +
      pathSubstr.slice(1)
    const singlePathObj = upperCasePath.slice(0, upperCasePath.length - 1)
    let data, currentObject

    if (store.hasModule(pathSubstr)) {
      store.dispatch(`${pathSubstr}/get${upperCasePath}`)
        .then(() => {
          data = store.getters[`${pathSubstr}/get${upperCasePath}`]
          if (data && data.length) {
            if (to.params.id) {
              currentObject = {
                ...data.find(object => Number(object.id) ===
                Number(to.params.id))
              }
              console.log(currentObject.length)
              if (currentObject && currentObject.length) {
                store.dispatch(`${pathSubstr}/setCurrent${singlePathObj}`)
                next()
              } /* else {
                redirect('/page404')
              } */
            } else next()
          } else redirect('/page404')
        })
        .catch(error => {
          console.log(error)
          redirect('/page404')
        })
    } else next()
  })
})
