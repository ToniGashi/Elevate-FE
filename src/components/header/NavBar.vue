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

import NavLink from 'components/navigation/NavLink'
export default {
  name: 'NavBar',
  components: { NavLink },
  props: ['path', 'offset', 'homeOnTop'],
  data () {
    return {

      label: document.title,
      links: [
        { to: '/projects', label: 'Projects' },
        { to: '/about-us', label: 'About' },
        { to: '/contact', label: 'Contact us' }
      ]

    }
  }

}

</script>

<style lang="sass" scoped>

$transition: transform 0.35s linear
$transform-origin: left
$transform-style: flat

.home-brand
  transition: $transition
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(1)

.home-brand-shrink
  transition: $transition
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(0.7)

.regular-brand
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(0.7)

</style>
