import projects from 'app/mockData.js'
export function getAllProjects (context) {
  context.commit('setProjects', projects)
}
