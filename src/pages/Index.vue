<template>
  <q-page padding>
    <standard-grid :data="projects"
                   :component="projectListCard"/>
  </q-page>
</template>

<script>
import moduleFetcher from 'components/mixins/moduleFetcher'
import StandardGrid from 'components/grids/StandardGrid'
import { defineAsyncComponent, shallowRef } from 'vue'
export default {
  name: 'Index',
  components: { StandardGrid },
  mixins: [moduleFetcher],
  data () {
    return {
      projects: [],
      projectListCard: {}
    }
  },
  created () {
    this.projectListCard = shallowRef(defineAsyncComponent(
      () => import('components/cards/ProjectListCard.vue')
    ))
    const allProjects = [...this.$store.getters['projects/getProjects']]
    this.projects.push(allProjects[0])
    this.projects.push(allProjects[1])
    this.projects.push(allProjects[2])
  }
}
</script>
