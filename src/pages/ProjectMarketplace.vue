<template>
  <q-page padding>
    <project-list v-if="!$route.params.id"
                  :projects="data" />
    <router-view v-else />
  </q-page>
</template>

<script>
import ProjectList from 'components/projectMarketplace/ProjectList.vue'
import parentFetcher from 'components/mixins/parentFetcher.js'
export default {
  name: 'ProjectMarketplace',
  components: { ProjectList },
  mixins: [parentFetcher]
}
</script>
