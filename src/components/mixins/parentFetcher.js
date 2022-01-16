export default {
  data () {
    return {
      data: []
    }
  },
  async created () {
    const { data } = await import('boot/routevalidator.js')
    this.data = [...data]
  }
}
