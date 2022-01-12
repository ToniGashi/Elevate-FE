export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.data = [
      ...this.$store.getters[`${this.pathSubstr}/get${this.upperCasePath}`]
    ]
  },
  computed: {

    pathSubstr () {
      return this.$route.path.split('/')[1]
    },

    upperCasePath () {
      return this.pathSubstr.charAt(0).toUpperCase() +
        this.pathSubstr.slice(1)
    },

    singlePathObj () {
      return this.upperCasePath.slice(0, this.upperCasePath.length - 1)
    },

    currentObject () {
      let currentObject

      if (this.$route.params.id) {
        currentObject = {
          ...this.$store.getters[`${this.pathSubstr}/getCurrent${this.singlePathObj}`]
        }
      }

      return currentObject
    }

  }

}
