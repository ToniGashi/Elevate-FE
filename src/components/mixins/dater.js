export default {
  methods: {
    computeDate (dbDate) {
      const date = new Date(dbDate)
      const day = this.$t(`date.daysShort[${date.getDay()}]`)
      const month = this.$t(`date.monthsShort[${date.getDay()}]`)
      const numeral = date.getDate()
      const year = date.getFullYear()
      if (this.$i18n.locale === 'bg') {
        return `${day} ${numeral} ${month} ${year}`
      } else return `${day} ${month} ${numeral} ${year}`
    }
  }
}
