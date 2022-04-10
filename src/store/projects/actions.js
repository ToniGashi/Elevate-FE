export async function getProjects (context) {
  await this.$axios.get('/api/projects')
    .then(response => {
      context.commit('setProjects', response.data)
    })
}

export async function setCurrentProject (context, id) {
  await this.$axios.get(`/api/projects/${id}`)
    .then(response => {
      context.commit('setCurrentProject', response.data)
    })
}
