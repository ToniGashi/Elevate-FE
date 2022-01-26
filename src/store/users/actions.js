export async function getUsers (context) {
  await this.$axios.get('/api/users')
    .then(response => {
      context.commit('setUsers', response.data)
    })
}

export function setCurrentUser (context, currentUser) {
  context.commit('setCurrentUser', currentUser.user)
}

export function setLoggedInStatus (context, loggedInStatus) {
  context.commit('setLoggedInStatus', loggedInStatus)
}
