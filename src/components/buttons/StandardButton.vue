<template>
  <q-btn :size="size"
         :padding="padding"
         :type="type"
         :unelevated="unelevated"
         :color="color">

    <div :class="labelClass">
      {{label}}
    </div>

  </q-btn>
</template>

<script>
export default {
  name: 'StandardButton',
  props: {
    size: {
      required: true,
      type: String
    },
    padding: {
      default: 'xs md',
      type: String
    },
    type: {
      default: 'button',
      type: String
    },
    unelevated: {
      required: true,
      type: Boolean
    },
    color: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: [String, Number]
    },
    labelClass: {
      default: 'text-weight-regular',
      type: String
    }
  }
}
</script>
