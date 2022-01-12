import projects from 'app/mockData.js'
export async function getProjects (context) {
  context.commit('setProjects', projects)
}

export function setCurrentProject (context, project) {
  context.commit('setCurrentProject', project)
}
