<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  name: 'Index',
  created () {
    this.$store.dispatch('user/getAllUsers')
      .then(() => console.log(this.$store.getters['user/getUsers']))
  }
}
</script>
