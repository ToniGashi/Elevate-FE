<template>
  <div class="home">
    <startup-list></startup-list>
  </div>
</template>

<script>
// @ is an alias to /src
import StartupList from "../components/StartupList.vue"

export default {
  components: { StartupList },
  name: 'Home',
}
</script>
