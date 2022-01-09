<template>
  <q-page padding>
    <project-list v-if="!$route.params.id"
                  :projects="projects" />
    <router-view v-else
                 :current-project="currentProject" />
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
      projects: projects,
      currentProject: {}
    }
  },
  created () {
    if (this.$route.params.id) {
      this.currentProject = {
        ...projects.find(project => Number(project.id) ===
          Number(this.$route.params.id))
      }
    }
  }
}
</script>
