<template>
  <q-layout :view="path === '/' || path === '/about'
            ? 'hhh Lpr fff'
            : 'hHh Lpr fff'"
            @scroll="determineOffset">
    <!-- Be sure to play with the Layout demo on docs -->

    <q-header id="header"
              :elevated="path !== '/' && path !=='/about'">

    <header-card v-if="path === '/'"/>
    <about v-if="path === '/about'"/>

    <nav-bar id="nav-bar"
             :class="[
             { 'fixed-top': path === '/' || path === '/about'},
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

    <q-page-container :class="[
                      { 'contact-page': path === '/contact' },
                      { 'sign-up': path === '/sign-up' }
                      ]">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import NavBar from 'components/header/NavBar.vue'
import HeaderCard from 'components/cards/HeaderCard.vue'
import About from 'components/cards/AboutCard.vue'
import Footer from 'components/footer/Footer.vue'
export default {
  name: 'MainLayout',
  components: { Footer, HeaderCard, NavBar, About },
  data () {
    return {

      offset: 0

    }
  },
  computed: {

    homePageOnTop () {
      return ((this.path === '/' || this.path === '/about') && this.offset === 0)
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

.sign-up
  background: linear-gradient($secondary, $tertiary)

@keyframes fadeIn
 from
  opacity: 0
 to
  opacity: 0.7

.contact-page
  position: relative
  background: rgba(0, 0, 0, 0.7)

.contact-page:after
  content: ""
  position: absolute
  background: url("src/assets/map-of-the-world.jpg") no-repeat center fixed
  background-size: cover
  overflow: hidden
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: -1
  opacity: 0.7
  animation: fadeIn 0.7s
</style>
