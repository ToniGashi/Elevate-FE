<template>

  <q-toolbar inset>

    <q-toolbar-title class="text-primary text-subtitle1">
      Copyright © Your Website 2021
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
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/terms-of-use', label: 'Terms of Use' }
      ]
    }
  }
}
</script>
