export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.$watch(
      () => this.$route.params.id,
      async () => {
        if (!this.$route.params.id) {
          const { data } = await import('boot/routevalidator.js')
          this.data = [...data]
        }
      },
      { immediate: true }
    )
  }
}
