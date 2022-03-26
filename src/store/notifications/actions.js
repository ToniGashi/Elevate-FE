export function toggleDisplay (context) {
  context.commit('toggleNotification', true)
  setTimeout(() => {
    context.commit('toggleNotification', false)
    context.commit('setMessage', '')
    context.commit('setType', '')
  }, 2000)
}

export function setMessage (context, message) {
  context.commit('setMessage', message)
}

export function setType (context, type) {
  context.commit('setType', type)
}
