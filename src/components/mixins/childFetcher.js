export default {
  data () {
    return {
      currentObject: {}
    }
  },
  async created () {
    const { currentObject } = await import('boot/routevalidator.js')
    this.currentObject = {
      ...currentObject
    }
    this.$watch(
      () => this.$route.params.id,
      async () => {
        if (this.$route.params.id) {
          const { currentObject } = await import('boot/routevalidator.js')
          this.currentObject = {
            ...currentObject
          }
        }
      }
    )
  }
}
