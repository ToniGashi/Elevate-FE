<template>
  <q-page padding>
    <q-btn @click="signOut">
      {{$t('label.profile.logOut')}}
    </q-btn>
  </q-page>
</template>

<script>
import childFetcher from 'components/mixins/childFetcher.js'
export default {
  name: 'Profile',
  mixins: [childFetcher],
  methods: {
    signOut () {
      window.localStorage.removeItem('loggedUser')
      this.$store.dispatch('users/logOutCurrentUser')
      this.$router.push('/')
    }
  }
}
</script>
