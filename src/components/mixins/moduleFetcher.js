export default {
  props: ['modules'],
  created () {
    let module, upperCaseModule
    for (let i = 0; i < this.modules.length; i++) {
      module = this.modules[i]
      upperCaseModule = module.charAt(0).toUpperCase() +
        module.slice(1)
      this.$store.dispatch(`${module}/get${upperCaseModule}`)
        .catch(error => {
          console.log(error)
        })
    }
  }
}
