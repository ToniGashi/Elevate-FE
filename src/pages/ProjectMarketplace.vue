<template>
  <q-page padding>
    <project-list v-if="!$route.params.id"></project-list>
    <router-view v-else></router-view>
  </q-page>
</template>

<script>
import ProjectList from 'components/projectMarketplace/ProjectList.vue'
import projects from 'components/projectMarketplace/mockData'
export default {
  name: 'ProjectMarketplace',
  components: { ProjectList },
  data () {
    return {
      currentProject: {}
    }
  },
  created () {
    if (this.$route.params.id) { this.currentProject = projects.find(project => project.id === this.$route.params.id) }
  }
}
</script>
