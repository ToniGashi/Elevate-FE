export function setProjects (state, payload) {
  state.projects = [...payload]
}

export function setCurrentProject (state, payload) {
  state.currentProject = { ...payload }
}
