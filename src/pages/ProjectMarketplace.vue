<template>
  <div class="home">
    <project-list></project-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '../components/projectMarketplace/ProjectList.vue'

export default {
  name: 'ProjectMarketplace',
  components: { ProjectList },
}
</script>
