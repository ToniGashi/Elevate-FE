<template>
  <div id="notify"
       :class="[
       'z-max',
       'row',
       'items-center',
       'shadow-10',
       'rounded-borders',
       'q-pa-sm',
       { 'bg-positive': type === 'success' },
       { 'bg-negative': type === 'failure' }
       ]">
    <div class="text-weight-medium col
         text-body1 text-center text-no-wrap">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandardNotification',
  props: {
    type: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
#notify
  height: 60px
  width: fit-content
</style>
