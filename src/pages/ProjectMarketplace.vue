<template>
  <q-page padding>
    <project-list v-if="!$route.params.id"
                  :projects="data" />
    <router-view v-else
                 :current-project="currentObject" />
  </q-page>
</template>

<script>
import ProjectList from 'components/projectMarketplace/ProjectList.vue'
import fetcher from 'components/mixins/fetcher.js'
export default {
  name: 'ProjectMarketplace',
  components: { ProjectList },
  mixins: [fetcher]
}
</script>
