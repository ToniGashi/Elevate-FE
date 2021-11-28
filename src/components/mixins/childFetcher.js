export default {
  data () {
    return {
      currentObject: {}
    }
  },
  created () {
    this.$watch(
      () => this.$route.params.id,
      async () => {
        if (this.$route.params.id) {
          const { currentObject } = await import('boot/routevalidator.js')
          this.currentObject = {
            ...currentObject
          }
        }
      },
      { immediate: true }
    )
  }
}
