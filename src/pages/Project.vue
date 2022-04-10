<template>
  <q-page padding>
    <ProjectCard class="q-mb-none" :current-project="currentObject"/>
  </q-page>
</template>

<script>
import ProjectCard from 'components/cards/ProjectCard.vue'
import childFetcher from 'components/mixins/childFetcher.js'
export default {
  name: 'Project',
  mixins: [childFetcher],
  components: { ProjectCard }
}
</script>
