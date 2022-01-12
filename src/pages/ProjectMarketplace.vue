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
export default {
  name: 'ProjectMarketplace',
  components: { ProjectList },
  data () {
    return {
      projects: [],
      currentProject: {}
    }
  },
  created () {
    this.$store.dispatch('projects/getProjects')
      .then(() => {
        this.projects = [...this.$store.getters['projects/getProjects']]

        if (this.$route.params.id) {
          this.currentProject = {
            ...this.projects.find(project => Number(project.id) ===
              Number(this.$route.params.id))
          }
        }
      })
  }
}
</script>
