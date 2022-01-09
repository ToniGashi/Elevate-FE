<template>
<div>
    <ul v-for="project in projects"
        :key="project.id">
        <li>
          <project-list-item :currentProject="project"/>
        </li>
    </ul>
</div>
</template>

<script>
import ProjectListItem from 'components/projectMarketplace/ProjectListItem'
export default {
  name: 'ProjectList',
  components: { ProjectListItem },
  props: ['projects']
}
</script>
