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
      const i = 0
      let grid = []

      if (this.projects.length === 1) {
        grid = [[this.projects[0]]]
      } else if (this.projects.length === 2) {
        grid = [[this.projects[0], this.projects[1]]]
      } else if (this.projects.length > 2) {
        if (this.projects.length % 3 === 0) {
          grid = this.formGrid(i, grid,
            this.projects.length / 3, 'threes')
        } else if (this.projects.length % 3 === 1) {
          if (this.projects.length % 2 === 0) {
            grid = this.formGrid(i, grid,
              this.projects.length / 2, 'twos-even')
          } else {
            grid = this.formGrid(i, grid,
              2 + (this.projects.length - 4) / 3, 'two-twos')
          }
        } else if (this.projects.length % 3 === 2) {
          grid = this.formGrid(i, grid,
            1 + (this.projects.length - 2) / 3, 'one-twos')
        }
      }
      return grid
    }
  },
  methods: {
    formGrid (rows, grid, rowLength, type) {
      let cols, offset, rowSize

      for (rows; rows < rowLength; rows++) {
        grid[rows] = []
      }

      if (type === 'threes') {
        rows = 0
        cols = 0
        offset = 1
        rowSize = 3
      } else if (type === 'twos-even') {
        rows = 0
        cols = 0
        offset = 1
        rowSize = 2
      } else if (type === 'two-twos') {
        grid[0][0] = this.projects[0]
        grid[0][1] = this.projects[1]
        grid[1][0] = this.projects[2]
        grid[1][1] = this.projects[3]
        rows = 2
        cols = 4
        offset = -3
        rowSize = 3
      } else if (type === 'one-twos') {
        grid[0][0] = this.projects[0]
        grid[0][1] = this.projects[1]
        rows = 1
        cols = 2
        offset = -1
        rowSize = 3
      }

      for (cols; cols < this.projects.length; cols++) {
        grid[rows].push(this.projects[cols])
        if ((cols + offset) % rowSize === 0) {
          rows++
        }
      }

      return grid
    }
  }
}
</script>
