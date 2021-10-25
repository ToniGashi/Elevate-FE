<template>
  <div>
    <nav-bar/>
    <router-view></router-view>
  </div>
    
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"
import store from './store'


export default defineComponent({
  components: { NavBar },
  name: 'App',
  async mounted() {
    await store.dispatch("apiDefinition/getApiDef");
  }
});

</script>
