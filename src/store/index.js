import { createStore } from "vuex";
import apiDefinition from "./apiDefinition";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
const Store = createStore({
  modules: {
    apiDefinition
  },
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
});

export default Store;
