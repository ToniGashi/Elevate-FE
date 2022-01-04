<template>
  <q-layout :view="path === '/'
            ? 'hhh Lpr fff'
            : 'hHh Lpr fff'"
            @scroll="determineOffset">
    <!-- Be sure to play with the Layout demo on docs -->

    <q-header id="header"
              :class="{ 'bg-header': homePageOnTop }"
              :elevated="path !== '/'">

    <header-card v-if="path === '/'"/>

    <nav-bar id="nav-bar"
             :class="[
               { 'fixed-top': path === '/' },
               { 'bg-primary': !homePageOnTop }
             ]"
             :path="path"
             :offset="offset"
             :home-on-top="homePageOnTop"/>

    </q-header>

    <q-footer id="footer"
              class="bg-white">

      <q-separator />

      <Footer class="fit"/>

    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import NavBar from 'components/header/NavBar'
import HeaderCard from 'components/header/HeaderCard'
import Footer from 'components/footer/Footer'
export default {
  name: 'MainLayout',
  components: { Footer, HeaderCard, NavBar },
  data () {
    return {

      offset: 0

    }
  },
  computed: {

    homePageOnTop () {
      return this.path === '/' && this.offset === 0
    },

    path () {
      return this.$route.path
    }

  },
  methods: {

    determineOffset (details) {
      this.offset = details.position
    }

  }

}

</script>

<style lang="sass" scoped>

#nav-bar
  height: 80px

#footer
  height: 88px

</style>
