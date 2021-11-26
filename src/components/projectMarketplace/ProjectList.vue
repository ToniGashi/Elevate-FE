<template>
<div>
    <ul v-for="project in mockProjectList" :key="project.id">
        <li style="list-style-type: none;"><project-list-item :currentProject="project"></project-list-item></li>
    </ul>
</div>
</template>

<script>
import ProjectListItem from './ProjectListItem.vue'
import mockProjectList from './mockData'
export default ({
  components: { ProjectListItem },
  data () {
    return {
      mockProjectList
    }
  },
  mounted () {
    console.log('from project list: ', this.mockProjectList)
  }
})
</script>
