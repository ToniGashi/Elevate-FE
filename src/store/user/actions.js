export async function getUsers (context) {
  await this.$axios.get('/api/users')
    .then(response => {
      context.commit('setUsers', response.data)
    })
}

export function setCurrentUser (context, user) {
  context.commit('setCurrentUser', user)
}
