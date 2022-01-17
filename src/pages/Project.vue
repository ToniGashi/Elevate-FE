<template>
  <q-page padding>
    <ProjectCard :current-project="currentObject"/>
  </q-page>
</template>

<script>
import ProjectCard from 'components/cards/ProjectCard'
import childFetcher from 'components/mixins/childFetcher.js'
export default {
  name: 'Project',
  mixins: [childFetcher],
  components: { ProjectCard }
}
</script>
