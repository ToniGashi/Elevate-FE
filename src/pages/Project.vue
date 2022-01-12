<template>
  <q-page padding>
  </q-page>
</template>

<script>

export default {
  name: 'Project',
  props: ['currentProject'],
  created () {
    console.log(this.currentProject)
  }
}
</script>
