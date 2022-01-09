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
  props: ['projects'],
  computed: {
    grid () {
      let i = 0, grid = []

      if (this.projects.length === 1) {
        grid = [[this.projects[0]]]
      } else if (this.projects.length === 2) {
        grid = [[this.projects[0], this.projects[1]]]
      } else if (this.projects.length > 2) {
        if (this.projects.length % 3 === 0) {
          for (i; i < this.projects.length / 3; i++) {
            grid[i] = []
          }

          i = 0

          for (let j = 0; j < this.projects.length; j++) {
            grid[i].push(this.projects[j])
            if ((j + 1) % 3 === 0) {
              i++
            }
          }
        } else if (this.projects.length % 3 === 1) {
          if (this.projects.length % 2 === 0) {
            for (i; i < this.projects.length / 2; i++) {
              grid[i] = []
            }

            i = 0

            for (let j = 0; j < this.projects.length; j++) {
              grid[i].push(this.projects[j])
              if ((j + 1) % 2 === 0) {
                i++
              }
            }
          } else {
            for (i; i < 2 + (this.projects.length - 4) / 3; i++) {
              grid[i] = []
            }

            grid[0][0] = this.projects[0]
            grid[0][1] = this.projects[1]
            grid[1][0] = this.projects[2]
            grid[1][1] = this.projects[3]

            i = 2

            for (let j = 4; j < this.projects.length; j++) {
              grid[i].push(this.projects[j])
              if ((j - 3) % 3 === 0) {
                i++
              }
            }
          }
        } else if (this.projects.length % 3 === 2) {
          for (i; i < 1 + (this.projects.length - 2) / 3; i++) {
            grid[i] = []
          }

          grid[0][0] = this.projects[0]
          grid[0][1] = this.projects[1]

          i = 1

          for (let j = 2; j < this.projects.length; j++) {
            grid[i].push(this.projects[j])
            if ((j - 1) % 3 === 0) {
              i++
            }
          }
        }
      }
      return grid
    }
  }
}
</script>
