import projects from 'app/mockData.js'
export async function getProjects (context) {
  context.commit('setProjects', projects)
}

export async function setCurrentProject (context, id) {
  const project = context.getters.getProjects
    .find(project => Number(project.id) ===
    Number(id))
  if (project && Object.keys(project).length) {
    context.commit('setCurrentProject', project)
  }
}
