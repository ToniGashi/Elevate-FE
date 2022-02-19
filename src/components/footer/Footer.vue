<template>

  <q-toolbar inset>

    <q-toolbar-title class="text-primary text-subtitle1">
      GreenFunds © 2022. {{$t('label.footer.copyright')}}.
    </q-toolbar-title>

    <nav-link v-for="(link, index) in links"
              :key="index"
              class="nav-link text-subtitle1"
              flat
              :hover="false"
              :label="link.label"
              no-caps
              stretch
              :to="link.to"
              init-color="primary"/>

  </q-toolbar>

</template>

<script>
import NavLink from 'components/navigation/NavLink.vue'
export default {
  name: 'Footer',
  components: { NavLink },
  data () {
    return {
      links: [
        { to: '/privacy' },
        { to: '/terms-of-use' }
      ]
    }
  },
  created () {
    this.$watch(
      () => this.$i18n.locale,
      () => {
        this.links[0].label = this.$t('label.footer.privacyPolicy')
        this.links[1].label = this.$t('label.footer.termsOfUse')
      }, { immediate: true })
  }
}
</script>
