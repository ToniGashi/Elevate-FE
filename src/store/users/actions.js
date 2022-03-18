export async function getUsers (context) {
  await this.$axios.get('/api/users')
    .then(response => {
      context.commit('setUsers', response.data)
    })
}

export async function setCurrentUser (context, id) {
  await this.$axios.get(`/api/users/${id}`)
    .then(response => {
      context.commit('setCurrentUser', response.data)
    })
}

export function logInCurrentUser (context, user) {
  context.commit('setCurrentUser', user)
}

export function logOutCurrentUser (context) {
  context.commit('setCurrentUser', {})
}
