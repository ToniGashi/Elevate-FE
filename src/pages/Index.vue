<template>
  <q-page padding>
    <q-card flat
            square
            class="bg-grey-2">
      <q-card-section>
        <div class="text-h5 text-weight-bold text-primary">
          {{$t('label.homePage.activeProjects')}}
        </div>
      </q-card-section>
      <q-card-section>
        <div v-if="!projects.length"
             class="text-center">
        <q-spinner color="primary"
                   size="lg"/>
        </div>
        <standard-grid v-else
                       :data="projects"
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
    this.$watch(
      () => this.$store.getters['projects/getProjects'],
      () => {
        this.projects = [...this.$store.getters['projects/getProjects']]
      }
    )
  }
}
</script>
