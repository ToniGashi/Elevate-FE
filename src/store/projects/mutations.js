export default {
    setProjects(context, payload) {
        context.projects = [...payload];
      },
}
