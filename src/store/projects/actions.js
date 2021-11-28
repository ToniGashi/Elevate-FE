export async function getAllProjects (context) {
  await this.$axios.get('http://localhost:4000/projects', {
    withCredentials: true
  })
    .then(response => {
      context.commit('setProjects', response.data.projectList)
    })
    .catch((e) => {
      console.log(e)
    })
}
