<template>
<div>
    <ul v-for="project in mockProjectList" :key="project.id">
        <li>
          <project-list-item :currentProject="project"></project-list-item>
        </li>
    </ul>
</div>
</template>

<script>
import ProjectListItem from 'components/projectMarketplace/ProjectListItem'
export default {
  name: 'ProjectList',
  components: { ProjectListItem }
}
</script>
