<template>
  <q-toolbar>

    <nav-link :class="[
              'nav-link',
              { 'page-top-brand': pageOnTop },
              { 'page-brand-shrink': path === '/' && offset !== 0 },
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
              hover="secondary"
              :no-caps="false"
              :to="link.to"
              :label="link.label"/>

    <q-btn-toggle id="language-toggle"
                  unelevated
                  class="q-ml-md"
                  v-model="$i18n.locale"
                  dense
                  flat
                  :ripple="false"
                  toggle-color="secondary"
                  :options="localeOptions">

      <template v-slot:bg>

        <q-separator vertical
                     class="q-ml-sm"
                     dark />
      </template>

    </q-btn-toggle>

  </q-toolbar>

</template>

<script>

import NavLink from 'components/navigation/NavLink.vue'
export default {
  name: 'NavBar',
  components: { NavLink },
  props: ['path', 'offset', 'pageOnTop'],
  data () {
    return {
      label: document.title,
      links: [
        { to: '/' },
        { to: '/projects' },
        { to: '/about' },
        { to: '/contact' },
        { to: '/sign-up' }
      ],
      localeOptions: [
        { value: 'bg', label: 'БГ', slot: 'bg' },
        { value: 'en-US', label: 'EN' }
      ]
    }
  },
  created () {
    this.$watch(() => [
      this.$i18n.locale,
      this.$store.getters['users/getCurrentUser'].isLoggedIn
    ],
    () => {
      import(
        /* webpackInclude: /(bg|en-US)\.js$/ */
        'quasar/lang/' + this.$i18n.locale
      ).then(lang => {
        this.$q.lang.set(lang.default)
        const storedLocale = this.$q.cookies.get('locale')
        if (this.$i18n.locale !== storedLocale) {
          this.$q.cookies.set('locale', this.$i18n.locale,
            { path: '/' })
        }
      })
      this.links[0].label = this.$t('label.navLink.home')
      this.links[1].label = this.$t('label.navLink.projects')
      this.links[2].label = this.$t('label.navLink.about')
      this.links[3].label = this.$t('label.navLink.contact')
      this.links[4].label = this.$t('label.navLink.signUp')
      const isLoggedIn = window.localStorage.getItem('isLoggedIn') === 'true'
      if (isLoggedIn) {
        this.links[this.links.length - 1]
          .to = '/profile'
        this.links[this.links.length - 1]
          .label = this.$t('label.navLink.profile')
      } else {
        this.links[this.links.length - 1]
          .to = '/sign-up'
        this.links[this.links.length - 1]
          .label = this.$t('label.navLink.signUp')
      }
    }, { immediate: true })
  },
  mounted () {
    const toggleGroup = document.querySelector('#language-toggle')
    toggleGroup.querySelectorAll('button .q-focus-helper')
      .forEach(focusHelper => focusHelper.remove())
  }
}

</script>

<style lang="sass" scoped>

$transition: transform 0.35s linear
$transform-origin: left
$transform-style: flat

.page-top-brand
  transition: $transition
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(1)

.page-brand-shrink
  transition: $transition
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(0.7)

.regular-brand
  transform-origin: $transform-origin
  transform-style: $transform-style
  transform: scale(0.7)

</style>
