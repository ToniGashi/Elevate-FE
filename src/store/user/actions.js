export async function getAllUsers (context) {
  await this.$axios.get('/api/users')
    .then(response => {
      context.commit('setUsers', response.data)
    })
}
