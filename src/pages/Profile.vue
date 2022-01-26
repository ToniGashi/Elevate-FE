<template>
  <q-page padding>
    <q-btn @click="signOut()">Sign Out</q-btn>
    <p>{{this.$store.getters['users/getCurrentUser'].first_name}} {{this.$store.getters['users/getCurrentUser'].last_name}}</p>
    <p></p>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    signOut () {
      window.localStorage.clear()
      window.localStorage.setItem('isLoggedIn', false)
      this.$store.dispatch('users/setLoggedInStatus', false)
      this.$router.push('/')
    }
  }
}
</script>
