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

    <q-page-container
      :class="{ 'contact-page': path === '/contact' }">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import NavBar from 'components/header/NavBar.vue'
import HeaderCard from 'components/header/HeaderCard.vue'
import Footer from 'components/footer/Footer.vue'
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

.contact-page
  position: relative
  background: rgba(0, 0, 0, 0.6)

.contact-page:after
  content: ""
  position: absolute
  background: url("src/assets/map-of-the-world.jpg") no-repeat center center fixed
  background-size: cover
  overflow: hidden
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: -1
  opacity: 0.7
</style>
