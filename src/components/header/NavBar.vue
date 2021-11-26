<template>
  <q-toolbar>

    <nav-link
      :class="[
        'nav-link',
        { 'home-brand': homeOnTop },
        { 'home-brand-shrink': path === '/' && offset !== 0 },
        { 'regular-brand': path !== '/' }
        ]"
      init-color="secondary"
      size="lg"
      stretch
      flat
      :hover="false"
      :no-caps="false"
      :to="path === '/' ? '#header' : '/'"
      :label="label" />

    <q-space />

    <nav-link v-for="(link, index) in links"
              :key="index"
              class="nav-link"
              init-color="white"
              stretch
              flat
              :hover="homeOnTop
              ? 'secondary'
              : 'muted'"
              no-caps
              :to="link.to"
              :label="link.label"/>

  </q-toolbar>

</template>

<script>

import NavLink from 'components/header/NavLink'
export default {
  name: 'NavBar',
  components: { NavLink },
  props: ['path', 'offset', 'homeOnTop'],
  data () {
    return {

      label: document.title,
      links: [
        { to: '/how-it-works', label: 'How it works' },
        { to: '/about', label: 'About' },
        { to: '/customer-support/contact', label: 'Contact us' },
        { to: '/projects', label: 'Projects' }
      ]

    }
  }

}

</script>

<style lang="sass" scoped>

.home-brand
  transition: transform 0.35s linear
  transform-origin: left
  transform-style: flat
  transform: scale(1)

.home-brand-shrink
  transition: transform 0.35s linear
  transform-origin: left
  transform-style: flat
  transform: scale(0.7)

.regular-brand
  transform-origin: left
  transform-style: flat
  transform: scale(0.7)

</style>
