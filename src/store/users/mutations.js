export function setUsers (state, payload) {
  state.users = [...payload]
}

export function setCurrentUser (state, payload) {
  state.currentUser = { ...payload }
}
