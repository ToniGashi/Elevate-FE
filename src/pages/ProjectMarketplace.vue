<template>
  <q-page padding>
    <project-list v-if="!$route.params.id"></project-list>
    <router-view v-else></router-view>
  </q-page>
</template>

<script>
import ProjectList from 'components/projectMarketplace/ProjectList.vue'
export default {
  name: 'ProjectMarketplace',
  components: { ProjectList }
}
</script>
