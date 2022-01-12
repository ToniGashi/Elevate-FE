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
      projects: []
    }
  },
  created () {
    this.projects = [...this.$store.getters['projects/getProjects']]
  },
  computed: {

    currentProject () {
      let project

      if (this.$route.params.id) {
        project = { ...this.$store.getters['projects/getCurrentProject'] }
      }

      return project
    }

  }

}
</script>
