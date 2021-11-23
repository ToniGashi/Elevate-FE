<template>

  <q-btn @mouseover="changeColor"
         @mouseleave="resetColor"
         :text-color="textColor"
         :size="size"
         :stretch="stretch"
         :ripple="false"
         :flat="flat"
         :no-caps="noCaps"
         :to="to"
         :label="label"/>

</template>

<script>
export default {
  name: 'NavLink',
  props: {

    initColor: {

      required: true,
      type: String

    },

    hover: {

      required: true,
      type: [String, Boolean]

    },

    size: {

      type: String

    },

    stretch: {

      required: true,
      type: Boolean

    },

    flat: {

      required: true,
      type: Boolean

    },

    noCaps: {

      required: true,
      type: Boolean

    },

    to: {

      required: true,
      type: [String, Object]

    },

    label: {

      required: true,
      type: [String, Number]

    }

  },
  mounted () {
    document.querySelector('.nav-link .q-focus-helper').remove()
  },
  data () {
    return {

      textColor: this.initColor

    }
  },
  methods: {

    changeColor () {
      if (this.hover) { this.textColor = this.hover }
    },

    resetColor () {
      if (this.hover) { this.textColor = this.initColor }
    }

  }
}
</script>
