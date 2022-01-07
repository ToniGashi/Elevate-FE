export async function getAllProjects (context) {
  await this.$axios.get('/api/projects', {
    withCredentials: true
  })
    .then(response => {
      context.commit('setProjects', response.data.projectList)
    })
    .catch((e) => {
      console.log(e)
    })
}
