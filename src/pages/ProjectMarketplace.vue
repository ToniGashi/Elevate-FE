<template>
  <div>
    <project-list></project-list>
    <router-view></router-view>
  </div>
</template>

<script>
import ProjectList from 'components/projectMarketplace/ProjectList.vue'

export default {
  name: 'ProjectMarketplace',
  components: { ProjectList }
}
</script>
