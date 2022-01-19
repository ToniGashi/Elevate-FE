<template>
  <q-page padding>
    <template v-if="!$route.params.id">
    <div class="text-h4 text-weight-bold text-left q-mb-xl text-blue-grey-9">
      Investment opportunities
    </div>
    <standard-grid :data="data"
                   :component="projectListCard"/>
    </template>
    <router-view v-else />
  </q-page>
</template>

<script>
import parentFetcher from 'components/mixins/parentFetcher.js'
import StandardGrid from 'components/grids/StandardGrid'
import { shallowRef, defineAsyncComponent } from 'vue'
export default {
  name: 'ProjectMarketplace',
  components: {
    StandardGrid
  },
  mixins: [parentFetcher],
  data () {
    return {
      projectListCard: {}
    }
  },
  created () {
    this.projectListCard = shallowRef(defineAsyncComponent(
      () => import('components/cards/ProjectListCard.vue')
    ))
  }
}
</script>
