export async function getUsers (context) {
  await this.$axios.get('/api/users')
    .then(response => {
      context.commit('setUsers', response.data)
    })
}

export function setCurrentUser (context, id) {
  const user = context.getters.getUsers
    .find(user => Number(user.id) ===
      Number(id))
  if (user && Object.keys(user).length) {
    context.commit('setCurrentUser', user)
  }
}
