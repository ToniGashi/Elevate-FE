<template>
  <q-page padding>
    <template v-if="!$route.params.id">
    <div class="text-h4 text-weight-bold text-left q-mb-xl text-blue-grey-9">
      Investment opportunities
    </div>
    <standard-grid :data="data"
                   :current-component="projectListCard"/>
    </template>
    <router-view v-else />
  </q-page>
</template>

<script>
import parentFetcher from 'components/mixins/parentFetcher.js'
import StandardGrid from 'components/grids/StandardGrid'
import { markRaw } from 'vue'
export default {
  name: 'ProjectMarketplace',
  components: { StandardGrid },
  mixins: [parentFetcher],
  data () {
    return {
      projectListCard: {
        name: 'ProjectListCard',
        component: {
          template: '<project-list-card :currentProject="entity"/>'
        }
      }
    }
  },
  mounted () {
    console.log(markRaw())
  }
}
</script>
