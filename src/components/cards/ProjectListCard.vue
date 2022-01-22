<template>
  <q-card v-ripple.early
          square
          id="project-item"
          @click="changeRoute"
          @mouseover="expanded = true"
          @mouseleave="expanded = false">

    <q-img :src="currentObject.img"
           fit="cover"
           :ratio="$q.screen.lg? 16/9: 1">

      <q-avatar class="absolute-top-right
                text-weight-medium q-mt-xs q-mr-xs"
                color="red-9"
                :size="$q.screen.lg? 'xl': 'lg'"
                :font-size="$q.screen.lg? '15px': '12px'"
                text-color="white">
        <div class="absolute-center">
          {{currentObject.interestRate}}
        </div>
      </q-avatar>

      <div class="absolute-bottom no-padding">

        <div :class="[
             $q.screen.lg? 'q-py-lg': 'q-py-md' ,
             'text-center'
          ]">

        <div :class="$q.screen.lg? 'text-h6': 'text-subtitle2'">
          {{currentObject.name}}
        </div>

        <div class="text-overline">
          {{currentObject.motto}}
        </div>

        </div>

      <transition-group enter-active-class="animated slideInUp"
                        leave-active-class="animated slideOutDown">

        <q-list v-show="expanded"
                dense
                separator
                key="project-list"
                :class="[
            $q.screen.lg? 'text-body1': 'text-caption',
            'text-no-wrap',
            'text-primary',
            'bg-white',
            'text-left',
            $q.screen.lg? 'text-weight-bold': 'text-weight-medium'
            ]">

          <q-item key="project-location">
            <q-item-section>
              Location: {{currentObject.location}}
            </q-item-section>
          </q-item>

          <q-item key="project-term">
            <q-item-section>
              Term: {{currentObject.term}}
            </q-item-section>
          </q-item>

          <q-item key="project-type">
            <q-item-section>
              Type: {{currentObject.type}}
            </q-item-section>
          </q-item>

        </q-list>

      </transition-group>

      </div>

    </q-img>

  </q-card>
</template>

<script>
export default {
  name: 'ProjectListCard',
  props: ['currentObject'],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    changeRoute () {
      setTimeout(() => {
        this.$router.push(`/projects/${this.currentObject.id}`)
      }, 100)
    }
  }
}
</script>

<style lang="sass" scoped>
#project-item
  width: 100%
</style>
