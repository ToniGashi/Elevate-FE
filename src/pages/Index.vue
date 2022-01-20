<template>
  <q-page padding>
    <q-card v-if="projects && projects.length"
            flat
            square
            class="bg-grey-1">
      <q-card-section>
        <div class="text-h5 text-weight-bold text-left text-blue-grey-9">
          Active investment opportunities
        </div>
      </q-card-section>
      <q-card-section>
        <standard-grid :data="projects"
                   :component="projectListCard"/>
      </q-card-section>
  </q-card>
  </q-page>
</template>

<script>
import moduleFetcher from 'components/mixins/moduleFetcher.js'
import StandardGrid from 'components/grids/StandardGrid.vue'
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
    if (allProjects && allProjects.length) {
      this.projects.push(allProjects[0])
      this.projects.push(allProjects[1])
      this.projects.push(allProjects[2])
    }
  }
}
</script>
